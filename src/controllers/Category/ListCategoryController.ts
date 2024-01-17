import { Request as req, Response as res } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req:req, res:res){
        const listCategoryService = new ListCategoryService();
        const categories = await listCategoryService.execute();
        return res.json(categories);
    }
}

export { ListCategoryController }