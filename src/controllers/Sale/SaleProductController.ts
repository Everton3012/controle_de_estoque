import { Request as req, Response as res } from "express";
import { SalePoductService } from "../../services/Sale/SaleProductService";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";

export class SaleProductController {

    async handle(req:req, res:res) {
        const product_id = req.query.product_id as string;
        const { amount } : SaleProductRequest = req.body;
        const salePrdouctService = new SalePoductService();

        const saleProduct = await salePrdouctService.execute({
            amount,
            product_id
        })
        return res.json(saleProduct);
    }

}