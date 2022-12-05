import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCategoryDto } from "./dto/update.dto";

import { SubCategory } from "./schemas/sub_categories.schema";
import { CategoriesRepository } from "./sub_categories.repository";

@Injectable()
export class CategoriesService{
    constructor(private readonly categoriesRepository: CategoriesRepository) {}

    async getCategoryById(sub_categoryId: string): Promise<SubCategory> {
        return this.categoriesRepository.findOne({ sub_categoryId })
    }

    async getCategories(): Promise<SubCategory[]> {
        return this.categoriesRepository.find({});
    }

    async createCategory(name: string): Promise<SubCategory> {
        return this.categoriesRepository.create({
            sub_categoryid: uuidv4(),
            categoryId: uuidv4(),
            name
        })
    }

    async updateCategory(categoryId: string, categoryUpdates: UpdateCategoryDto): Promise<SubCategory> {
        return this.categoriesRepository.findOneAndUpdate({ categoryId }, categoryUpdates);
    }
}