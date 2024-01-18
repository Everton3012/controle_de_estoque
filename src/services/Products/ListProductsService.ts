import prismaClient from "../../prisma";

export class ListProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select:{
                id:true,
                name:true,
                amount:true
            },
            orderBy:{
                created_at: `desc`
            },
        });
        return products;
    }
}