import { Request as req , Response as res } from "express"
import { EditCategoryService } from "../../services/category/EditCategoryService"

class EditCategoryController{

    async handle( req:req, res:res) {
        const { name } = req.body;
        const category_id = req.query.category_id as string;
        const editCategoryService = new EditCategoryService();
        const categoryEdited = editCategoryService.execute({name, category_id});
        return res.json(categoryEdited);
    }

}

export { EditCategoryController }