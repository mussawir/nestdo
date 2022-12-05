import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Category, CategoryDocument } from "./schemas/categories.schema";

@Injectable()
export class CategoriesRepository {
    constructor(@InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>) {}

    async findOne(CategoryFilterQuery: FilterQuery<Category>): Promise<Category> {
        return this.CategoryModel.findOne(CategoryFilterQuery);
    }

    async find(CategorysFilterQuery: FilterQuery<Category>): Promise<Category[]> {
        return this.CategoryModel.find(CategorysFilterQuery)
    }

    async create(Category: Category): Promise<Category> {
        const newCategory = new this.CategoryModel(Category);
        return newCategory.save()
    }

    async findOneAndUpdate(CategoryFilterQuery: FilterQuery<Category>, Category: Partial<Category>): Promise<Category> {
        return this.CategoryModel.findOneAndUpdate(CategoryFilterQuery, Category, { new: true });
    }
}