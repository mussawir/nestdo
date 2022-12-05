import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "./schemas/sub_categories.schema";
import { CategoriesController } from "./sub-categories.controller";
import { CategoriesRepository } from "./sub-categories.repository";
import { CategoriesService } from "./sub-categories.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }])],
    controllers: [CategoriesController],
    providers: [CategoriesService, CategoriesRepository]
})
export class SubCategoriesModule {}