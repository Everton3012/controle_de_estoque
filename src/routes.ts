import { Router , Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserControle";
import { AuthUserController } from "./controllers/Auth/AuthUserController";
import { isAutenticated } from "./middlewares/isAutenticated";
import { DatailUserController } from "./controllers/DatailUser/DatailUserController";

const router = Router();

router.get("/test" , (req: Request, res: Response) => {
    return res.json({ ok: true})
});

//User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAutenticated, new DatailUserController().handle)
router.delete("")
export { router };