import { Router , Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer"
import { CreateUserController } from "./controllers/User/CreateUserControle";
import { AuthUserController } from "./controllers/Auth/AuthUserController";
import { isAutenticated } from "./middlewares/isAutenticated";
import { DatailUserController } from "./controllers/User/DatailUserController";
import { RemoveUserController } from "./controllers/User/RemoveUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { EditCategoryController } from "./controllers/Category/EditCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/Category/RemoveCategoryController";
import { CreateProductController } from "./controllers/Product/ProductController";
import { EditProductController } from "./controllers/Product/EditProductController";


const router = Router();
const upload = multer(uploadConfig.updload("./tmp"))

router.get("/test" , (req: Request, res: Response) => {
    return res.json({ ok: true})
});

//User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAutenticated, new DatailUserController().handle)
router.delete("/user/remove", new RemoveUserController().handle)

//Category Routes
router.post("/category", isAutenticated, new CreateCategoryController().handle)
router.patch("/category/edit" , isAutenticated, new EditCategoryController().handle)
router.get("/category/all" , isAutenticated, new ListCategoryController().handle)
router.delete("/category/remove", isAutenticated, new RemoveCategoryController().handle)

//Products Routes
router.post("/product", isAutenticated, upload.single("file"), new CreateProductController().handle)
router.put("/product/edit" , isAutenticated,upload.single("file"), new EditProductController().handle)

export { router };