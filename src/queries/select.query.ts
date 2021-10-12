export const SelectQuery = {
    getMovies: "select * from movies join genre on movies.genre = genre.genreId",
    getUserByUserId: `select * from users where email = :email`,
    getMovieDetails: `select * from movies
    left join movieVote on movies.movieId = movieVote.movieId
    left join moviereviews on movies.movieId = moviereviews.movieId
    left join users on moviereviews.userId = users.userId
    where movies.name = :name`,
    getMovieSuggetions: `select * from movies
    join userprofile on  userprofile.favouriteGenre = movies.genre
    where userprofile.userId = :userId`,
    getMovieList: `select movies.*, movievote.upvote, movievote.downvote from movies
    left join movievote on movies.movieId = movievote.movieId `
}