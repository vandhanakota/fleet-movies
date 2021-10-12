
export interface MoviewReview {
    movieId: number,
    userId: number,
    reviews: string,
    createdBy: string,
    createdOn: Date,
    updatedBy?: string,
    updatedOn?: Date
}