import { Request, Response } from "express"
import { CreateUserService } from "../../services/user/CreateUserService"
import { UserRequest } from "../../models/interfaces/User/UserRequest"

class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, email, password}: UserRequest = request.body;
        const createuserservice = new CreateUserService();
        const user = await createuserservice.execute({
            name, email, password
        });
        return response.json(user);
    }
}

export { CreateUserController }