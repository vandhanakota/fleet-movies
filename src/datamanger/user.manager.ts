import { SqlMangaer } from "../helpers/sql.manager";
import { InsertQuery, SelectQuery } from "../queries";

export class UserManager {
    public async IsUserExists(emailId) {
        const movies = await new SqlMangaer().Get(SelectQuery.getUserByUserId, {email: emailId });
        console.log(movies)
        return movies[0];
       
    }

    public async addFavouriteGenre(favourite) {
        const user = await new SqlMangaer().Insert(InsertQuery.setFavouriteGenre, favourite)
    }

    public async register(userDetails) {
        console.log(userDetails)
        const user = await new SqlMangaer().Insert(InsertQuery.registerUser, userDetails)
    }
}