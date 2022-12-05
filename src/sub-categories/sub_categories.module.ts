import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "./schemas/sub_categories.schema";
import { CategoriesController } from "./sub_categories.controller";
import { CategoriesRepository } from "./sub_categories.repository";
import { CategoriesService } from "./sub_categories.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }])],
    controllers: [CategoriesController],
    providers: [CategoriesService, CategoriesRepository]
})
export class SubCategoriesModule {}