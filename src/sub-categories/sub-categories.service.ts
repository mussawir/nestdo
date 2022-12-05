import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateSubCategoryDto } from "./dto/update-sub-categories.dto";

import { SubCategory } from "./schemas/sub_categories.schema";
import { SubCategoriesRepository } from "./sub-categories.repository";

@Injectable()
export class SubCategoriesService{
    constructor(private readonly subCategoriesRepository: SubCategoriesRepository) {}

    async getCategoryById(sub_categoryId: string): Promise<SubCategory> {
        return this.subCategoriesRepository.findOne({ sub_categoryId })
    }

    async getCategories(): Promise<SubCategory[]> {
        return this.subCategoriesRepository.find({});
    }

    async createSubCategory(name: string, categoryId: string): Promise<SubCategory> {
        return this.subCategoriesRepository.create({
            sub_categoryId: uuidv4(),
            categoryId,
            name
        })
    }

    async updateCategory(categoryId: string, subCategoryUpdates: UpdateSubCategoryDto): Promise<SubCategory> {
        return this.subCategoriesRepository.findOneAndUpdate({ categoryId }, subCategoryUpdates);
    }
}