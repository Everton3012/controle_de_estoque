import prismaClient from "../../prisma";
import { EditProductsRequests } from "../../models/interfaces/Products/EditProductRequest";

class EditProductService {

    async execute({name, amount,banner, description, price, product_id   } :EditProductsRequests) {
        const productEdited = await prismaClient.product.update({
            where: {
                id: product_id,
            },
            data:{
                name: name,
                amount: +amount,
                baner: banner,
                description: description,
                price:price
            }
        });
        return productEdited;
    }

}

export { EditProductService }