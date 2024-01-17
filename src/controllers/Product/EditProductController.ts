import { Request as req, Response as res } from "express"
import { EditProductsRequests } from "../../models/interfaces/Products/EditProductRequest"
import { EditProductService } from "../../services/Products/EditProductSevice"

class EditProductController {

    async handle(req:req,res:res) {
        const {amount,banner,description,name,price,product_id}: EditProductsRequests = req.body;
        const editProductService = new EditProductService();

        const productEdited = editProductService.execute({
            amount,
            banner,
            description,
            name,
            price,
            product_id
        });
        return res.json(productEdited);
    }
    

}

export { EditProductController }