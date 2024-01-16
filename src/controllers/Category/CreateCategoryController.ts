import { Request as req, Response as res } from "express";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{

    async handle(req: req, res:res){
        const { name }: CategoryRequest = req.body;
        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({name});
        return res.json(category);
    }

}

export { CreateCategoryController }