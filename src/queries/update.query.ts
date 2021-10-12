export const UpdateQuery = {
    addUpVote: `UPDATE movievote 
    SET upvote = upvote + 1 
    WHERE movieId = :movieId`,
    addDownVote: `UPDATE movievote 
    SET downvote = downvote + 1 
    WHERE movieId = :movieId`
};