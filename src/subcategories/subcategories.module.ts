import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "./schemas/subcategories.schema";
import { SubCategoriesController } from "./subCategories.controller";
import { SubCategoriesRepository } from "./subCategories.repository";
import { SubCategoriesService } from "./subCategories.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }])],
    controllers: [SubCategoriesController],
    providers: [SubCategoriesService, SubCategoriesRepository]
})
export class SubCategoriesModule {}