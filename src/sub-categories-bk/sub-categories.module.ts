import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "./schemas/sub_categories.schema";
import { SubCategoriesController } from "./sub-categories.controller";
import { SubCategoriesRepository } from "./sub-categories.repository";
import { SubCategoriesService } from "./sub-categories.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }])],
    controllers: [SubCategoriesController],
    providers: [SubCategoriesService, SubCategoriesRepository]
})
export class SubCategoriesModule {}