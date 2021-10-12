export const InsertQuery = {
    createMovie: `Insert into movies (name,genre,releaseDate,createdBy,CreatedAt) values 
    (:name,:genre,:releaseDate,:createdBy,now())`,
    addDefaultVote: `Insert into movievote (movieId, downvote, upvote, createdBy,CreatedAt) values 
    (:movieId,:downvote, :upvote, :createdBy,now())`,
    addMoviewReview: `Insert into moviereviews (movieId,userId,reviews,createdBy,CreatedAt) values 
    (:movieId,:userId,:reviews,:createdBy,now())`,
    registerUser: `Insert into users (userName,email,password,createdBy,CreatedAt) values 
    (:userName,:emailId,:password,:createdBy,now())`,
    setFavouriteGenre: `Insert into userprofile (userId, favouriteGenre,createdBy,CreatedAt) values 
    (:userId,:favouriteGenre,:createdBy,now())`,
} 