import { Request, Response } from 'express';
import { MovieManager } from "../datamanger/movie.manager";
import { UserManager } from '../datamanger/user.manager';

export class MovieController {

    public async getMovies (req: Request, res: Response) {
        try {
            const movies = await new  MovieManager().getMovies();
            res.status(200).json(movies);
        } catch(err) {
        console.error(err);
        }
    }

    public async getMovieDetails(req: Request, res: Response) {
        const details = await new MovieManager().getMovieDetails(req.body.name)
        res.status(200).json({details})
    }

    public async getMovieList(req: Request, res: Response) {
        console.log(req)
        const details = await new MovieManager().getMovieList(req.query)
        res.status(200).json({details})
    }

    public async getMovieSuggetions(req: Request, res: Response) {

        const userId = req.headers.userid;
        if (!userId) res.status(401).json({message: "Unauthorized user"});
        const isUserExists = await new UserManager().IsUserExists(userId)
        if (isUserExists) {
            const suggestedMovie = await new MovieManager().getMovieSuggestions(isUserExists.userId)
            res.status(200).json(suggestedMovie);
        } else {
            res.status(401).json({message: "User Unauthorized to add movie review"});
        }

    }


    public async addUpVote(req: Request, res: Response) {

        const userId = req.headers.userid;
        console.log(req)
        if (!userId) res.status(401).json({message: "Unauthorized user"});

        const isUserExists = await new UserManager().IsUserExists(userId)
        if (isUserExists) {
            
            await new MovieManager().addUpVote(req.params.movieId);
            res.status(200).json({message: "Movie Vote Created Successfully!!!!"});
        } else {
            res.status(401).json({message: "User Unauthorized to add movie review"});
        }
    }


    public async addDownVote(req: Request, res: Response) {

        const userId = req.headers.userid;
        console.log(req)
        if (!userId) res.status(401).json({message: "Unauthorized user"});

        const isUserExists = await new UserManager().IsUserExists(userId)
        if (isUserExists) {
            
            await new MovieManager().addDownVote(req.params.movieId);
            res.status(200).json({message: "Movie Vote Created Successfully!!!!"});
        } else {
            res.status(401).json({message: "User Unauthorized to add movie review"});
        }
    }

    public async addMoviewReview(req: Request, res: Response) {

        const userId = req.headers.userid;
        if (!userId) res.status(401).json({message: "Unauthorized user"});

        const payload = req.body
        const params = {
            createdBy: "vandhana",
            createdAt: new Date(),
            userId: null
        }
        const isUserExists = await new UserManager().IsUserExists(userId)
        if (isUserExists) {
            params.userId = isUserExists.userId
            const requestObject = Object.assign({}, payload, params)
            await new MovieManager().addReview(requestObject);
            res.status(200).json({message: "Movie Review Created Successfully!!!!"});
        } else {
            res.status(401).json({message: "User Unauthorized to add movie review"});
        }
    }


    public async createMovie(req: Request, res: Response) {
        const params = {
            createdBy: "vandhana",
            createdAt: new Date()
        }
        const userId = req.headers.userid;
        if (!userId) res.status(401).json({message: "Unauthorized user"});
        const payload = req.body
        const requestObject = Object.assign({}, payload, params)
        const isUserExists = await new UserManager().IsUserExists(userId)
        if (isUserExists) {
            await new MovieManager().addMovie(requestObject);
            res.status(200).json({message: "Movie Created Successfully!!!!"});
        } else {
            res.status(400).json({message: "User doesnot exists and do not have privilage to add movie"});
        }
    }
}
