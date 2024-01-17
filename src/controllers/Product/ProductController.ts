import { Request as req, Response as res } from "express";
import { CreateProductService } from "../../services/Products/CreateProductService";
import { ProductsRequest } from "../../models/interfaces/Products/ProductsRequest"

class CreateProductController {

    async handle (req:req,res:res){
        const {amount,baner,category_id,description,name,price}: ProductsRequest = req.body;
        const createProducService = new CreateProductService();

        if (!req.file) {
            throw new Error("Error sending image");        
        }else{
            const {originalname, filename: baner} = req.file;
            const product = await createProducService.execute({
                name,
                price,
                baner,
                category_id,
                description,
                amount
            });
            return res.json(product);
        }

    }

}

export { CreateProductController }