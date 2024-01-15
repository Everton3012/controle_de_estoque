import { Request, Response } from "express";
import { AuthUserService } from "../../services/auth/AuthUserService";
import { AuthRequest } from "../../models/interfaces/auth/AuthRequests";

class AuthUserController {

    async handle(req: Request, res: Response) {
        const {email,password} : AuthRequest = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({
            email,password
        });

        return res.json(auth);
    }

}

export { AuthUserController }