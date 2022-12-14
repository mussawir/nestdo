import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateSubCategoryDto } from "./dto/update-subcategories.dto";
import { SubCategory } from "./schemas/subcategories.schema";
import { SCategoriesRepository } from "./scategories.repository";

@Injectable()
export class SCategoriesService{
    constructor(private readonly subCategoriesRepository: SCategoriesRepository) {}

    async getSubCategoryById(subcategoryId: string): Promise<SubCategory> {
        return this.subCategoriesRepository.findOne({ subcategoryId })
    }

    async getSubCategoriesByCat(categoryId: string): Promise<SubCategory[]> {
       // return ['1', '2']: string;
        return this.subCategoriesRepository.findByCat({ categoryId })
    }

    async getSubCategories(): Promise<SubCategory[]> {
        return this.subCategoriesRepository.find({});
    }

    async createSubCategory(name: string, categoryId: string): Promise<SubCategory> {
        return this.subCategoriesRepository.create({
            subcategoryId: uuidv4(),
            name,
            categoryId
        })
    }

    async updateSubCategory(subcategoryId: string, subCategoryUpdates: UpdateSubCategoryDto): Promise<SubCategory> {
        return this.subCategoriesRepository.findOneAndUpdate({ subcategoryId }, subCategoryUpdates);
    }
}