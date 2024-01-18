import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductRequest";
import prismaClient from "../../prisma";

export class SalePoductService {

    async execute({product_id, amount}: SaleProductRequest) {
        if (!product_id || !amount) {
                throw new Error("Dados de Entrada nao fora encontrados");
                
        }

        const queryProduct = await prismaClient.product.findFirst({
            where:{
                id:product_id
            },
        })
        if(queryProduct.amount > amount && amount > 0) {
            const newAcount = (queryProduct?.amount - amount);
            const saveSale = await prismaClient.product.update({
                where:{
                    id: product_id,
                },
                data:{
                    amount: newAcount
                },
                select:{
                    id:true,
                    name:true,
                    amount:true
                }
            });
            return saveSale;
        }else{
            throw new Error("Não foi possivel efetuar a venda")
        }
    }

}