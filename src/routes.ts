import { Router , Request, Response } from "express";
import { CreateUserController } from "./controllers/User/User/CreateUserControle";
import { AuthUserController } from "./controllers/Auth/AuthUserController";

const router = Router();

router.get("/test" , (req: Request, res: Response) => {
    return res.json({ ok: true})
});

//User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
export { router };