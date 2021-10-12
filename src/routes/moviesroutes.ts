import {Request, Response} from "express";
import { MovieController }  from '../controller/movie.controller';
import { UserController } from "../controller/user.controller";

export class Routes {
    public movieController:MovieController = new MovieController();
    public userController: UserController = new UserController();
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'GET request successfull!!!!'
            })
        });
        app.route('/login').post(this.userController.login)
        app.route('/register').post(this.userController.register)
        app.route('/setFavourite').post(this.userController.setFavouriteGenre)
        app.route('/movies').get(this.movieController.getMovies);
        app.route('/addMovie').post(this.movieController.createMovie);
        app.route('/addReview').post(this.movieController.addMoviewReview)
        app.route('/addUpVote/:movieId').put(this.movieController.addUpVote);
        app.route('/addDownVote/:movieId').put(this.movieController.addDownVote);
        app.route('/getMovieSuggestions').get(this.movieController.getMovieSuggetions)
        app.route('/getMovieDetails').post(this.movieController.getMovieDetails);
        app.route('/movielist').get(this.movieController.getMovieList)
    }
   
}
