import { Request as req, Response as res } from "express";
import { ListProductsService } from "../../services/Products/ListProductsService";

export class ListProductsController {
    async handle(req:req,res:res){
        const listProductsService = new ListProductsService();
        const products = await listProductsService.execute();
        
        return res.json(products);
    }

}