import { Request as req, Response as res } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";

class RemoveCategoryController {
    async handle(req:req, res:res){
        const category_id = req.query.category_id as string;
        const removeCategoryService = new RemoveCategoryService();
        const category = removeCategoryService.execute({category_id});
        return res.json({message: "Category deleted sucessfully"})
    }
}

export { RemoveCategoryController }