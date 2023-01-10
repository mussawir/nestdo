import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCategoryDto } from "./dto/update-categories.dto";

import { Category } from "./schemas/categories.schema";
import { CategoriesRepository } from "./categories.repository";

@Injectable()
export class CategoriesService{
    constructor(private readonly categoriesRepository: CategoriesRepository) {}

    async getCategoryById(categoryId: string): Promise<Category> {
        return this.categoriesRepository.findOne({ categoryId })
    }

    async getCategories(): Promise<Category[]> {
        return this.categoriesRepository.find({});
    }

    async createCategory(name: string): Promise<Category> {
        return this.categoriesRepository.create({
            categoryId: uuidv4(),
            name
      
        })
    }

    async updateCategory(categoryId: string, categoryUpdates: UpdateCategoryDto): Promise<Category> {
        return this.categoriesRepository.findOneAndUpdate({ categoryId }, categoryUpdates);
    }
}