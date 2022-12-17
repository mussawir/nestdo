import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { SubCategory, SubCategoryDocument } from "./schemas/subcategories.schema";

@Injectable()
export class SubCategoriesRepository {
    constructor(@InjectModel(SubCategory.name) private SubCategoryModel: Model<SubCategoryDocument>) {}

    // async findOne(SubCategoryFilterQuery: FilterQuery<SubCategory>): Promise<SubCategory> {
    //     return this.SubCategoryModel.findOne(SubCategoryFilterQuery);
    // }

    // //Basic search using MongoDB queries 
    // async findByCat(SubCategoryFilterQuery: FilterQuery<SubCategory>): Promise<SubCategory[]> {
    //     return this.SubCategoryModel.find(SubCategoryFilterQuery);
    // }

    // async find(SubCategorysFilterQuery: FilterQuery<SubCategory>): Promise<SubCategory[]> {
    //     return this.SubCategoryModel.find(SubCategorysFilterQuery)
    // }

    // async create(SubCategory: SubCategory): Promise<SubCategory> {
    //     const newSubCategory = new this.SubCategoryModel(SubCategory);
    //     return newSubCategory.save()
    // }

    // async findOneAndUpdate(SubCategoryFilterQuery: FilterQuery<SubCategory>, SubCategory: Partial<SubCategory>): Promise<SubCategory> {
    //     return this.SubCategoryModel.findOneAndUpdate(SubCategoryFilterQuery, SubCategory, { new: true });
    // }
}