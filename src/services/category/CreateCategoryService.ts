import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest"
import prismaClient from "../../prisma"

class CreateCategoryService{

    async execute({name} : CategoryRequest){
        if (name == "" || name == null || !name) {
            throw new Error("Invalid name");
        }

        const category = await prismaClient.category.create({
            data:{
                name: name
            },
            select:{
                id:true,
                name:true
            },
        });
        return category
    }

}   

export { CreateCategoryService }