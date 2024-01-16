import { Router , Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserControle";
import { AuthUserController } from "./controllers/Auth/AuthUserController";
import { isAutenticated } from "./middlewares/isAutenticated";
import { DatailUserController } from "./controllers/User/DatailUserController";
import { RemoveUserController } from "./controllers/User/RemoveUserController";

const router = Router();

router.get("/test" , (req: Request, res: Response) => {
    return res.json({ ok: true})
});

//User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAutenticated, new DatailUserController().handle)
router.delete("delete", isAutenticated, new RemoveUserController().handle)
export { router };