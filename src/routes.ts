import { Router , Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserControle";

const router = Router();

router.get("/test" , (req: Request, res: Response) => {
    return res.json({ ok: true})
});

//User Routes
router.post("/user",new CreateUserController().handle);

export { router };