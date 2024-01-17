import prismaClient from "../../prisma";
import { ProductsRequest } from "../../models/interfaces/Products/ProductsRequest";

class CreateProductService {

    async execute({name,price,description,baner,category_id,amount}:ProductsRequest) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                baner: baner,
                category_id: category_id,
                amount: +amount
            }
        })
        return product;
    }

}

export { CreateProductService }