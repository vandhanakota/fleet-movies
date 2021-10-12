import { SqlMangaer } from '../helpers/sql.manager';
import {SelectQuery, InsertQuery, UpdateQuery} from '../queries';

export class MovieManager {

    public async getMovies() {
        const movies = await new SqlMangaer().Get(SelectQuery.getMovies);
        return movies;
    }

    public async getMovieList(query) {
        console.log(query)
        let queryString;
        if (query.sortby === 'upvote') {
            queryString = "order by movievote.upvote " + query.orderby
        } else if (query.sortby === 'downvote') {
            queryString = "order by movievote.downvote " + query.orderby
        }
        const movies = await new SqlMangaer().Get(SelectQuery.getMovieList + queryString)
        return movies
    }

    public async getMovieDetails(searchName: string) {
        const movies = await new SqlMangaer().Get(SelectQuery.getMovieDetails, {name: searchName})
        return movies
    }

    public async addUpVote(movie: any) {
        const addVote = await new SqlMangaer().Insert(UpdateQuery.addUpVote, {movieId: movie})
    }

    public async addDownVote(movie: any) {
        const addVote = await new SqlMangaer().Insert(UpdateQuery.addDownVote, {movieId: movie})
    }

    public async getMovieSuggestions(selectedUser: any) {
       const suggestedMovie = await new SqlMangaer().Get(SelectQuery.getMovieSuggetions, {userId: selectedUser})
       return suggestedMovie;
    }

    public async addMovie(movie: any) {
        const addMovie = await new SqlMangaer().Insert(InsertQuery.createMovie, movie)
        console.log(addMovie[0])
        console.log("----------------------------")
        const param = {
            movieId: addMovie[0],
            upvote: 0,
            downvote: 0,
            createdBy: "vandhana"
        }
        console.log(param)
        const adddefaultVote = await new SqlMangaer().Insert(InsertQuery.addDefaultVote, param)
        console.log(addMovie)
    }

    public async  addReview(review: any) {
        const addReview = await new SqlMangaer().Insert(InsertQuery.addMoviewReview, review)
    }
}