import { UserManager } from "../datamanger/user.manager";
import { Request, Response } from 'express';
export class UserController {

    public async login(req: Request, res: Response) {
        const paylod = req.body
        const isUserAvailable  = await new UserManager().IsUserExists(req.body.emailId)
        if (isUserAvailable) {
            if (isUserAvailable.password === paylod.password) {
                res.status(200).json({message: "Login Success"}); 
            } else {
                res.status(400).json({message: "password invalid"}); 
            }
        } else {
            res.status(400).json({message: "User doesn't  exists !!!!"});
        }

    }

    public async register(req: Request, res: Response) {

        const payload = req.body
        const params = {
            createdBy: "vandhana",
            createdAt: new Date()
        }
        const isUserAvailable  = await new UserManager().IsUserExists(payload.emailId)
        if (!isUserAvailable) {
            const payload = req.body
            const requestObject = Object.assign({}, payload, params)
            await new UserManager().register(requestObject);
            res.status(200).json({message: "User Registered successfully"});
        } else {
            res.status(400).json({message: "User already exists !!!!"});
        }
    }
    
    public async setFavouriteGenre(req: Request, res: Response) {

        const userId = req.headers.userid;
        if (!userId) res.status(401).json({message: "Unauthorized user"});
        
        const isUserExists = await new UserManager().IsUserExists(userId)
        const payload = req.body
        const params = {
            createdBy: "vandhana",
            createdAt: new Date(),
            userId: null
        }
       
        if (isUserExists) {
            params.userId = isUserExists.userId
            const requestObject = Object.assign({}, payload, params)
            await new UserManager().addFavouriteGenre(requestObject);
            res.status(200).json({message: "Favourite Genre added successfully"});
        } else {
            res.status(400).json({message: "User doesnot exists and do not have privilage to add movie"});
        }
    }
}
