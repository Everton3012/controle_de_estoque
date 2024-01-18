import prismaClient from "../../prisma";

interface ListProductCategoryRequest {
    category_id: string;
} 

export class ListProductCategoryService {

    async execute({ category_id } :ListProductCategoryRequest) {
        const findProductByCategoryId = await prismaClient.product.findMany({
            where:{
                category_id: category_id,
            }
        });
        
        return findProductByCategoryId
    }
  

}