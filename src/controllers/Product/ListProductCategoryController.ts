import { Request as req, Response as res  } from "express";
import { ListProductCategoryService } from "../../services/Products/ListProductCategoryService";

export class ListProductCategoryController {
    async handle(req:req, res:res) {
        const category_id = req.query.category_id as string;
        const listProductCategoryService = new ListProductCategoryService();
        const products = await listProductCategoryService.execute({
            category_id,
        });
        return res.json(products)

    }
}