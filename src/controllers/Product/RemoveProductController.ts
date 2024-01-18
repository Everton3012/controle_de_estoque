import { Request as req, Response as res } from "express";
import { RemoveProductService } from "../../services/Products/RemoveProductService";

export class RemoveProductController {
    async handle(req:req, res:res){
        const product_id = req.query.product_id as string;
        const removeProductService = new RemoveProductService();
        
        const productDeleted = await removeProductService.execute({ product_id });

        return res.json({message: "produto deletado com sucesso"});
    }


}
