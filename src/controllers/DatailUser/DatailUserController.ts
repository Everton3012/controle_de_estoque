import { Request, Response } from "express";
import { DatailUserService } from "../../services/Datails/DatailUserService";

class DatailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const datailUserService = new DatailUserService();
        const user = await datailUserService.execute(user_id);
        return res.json(user);
    }
}

export { DatailUserController }