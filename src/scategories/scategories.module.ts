import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SCategoriesController } from "./scategories.controller";
import { SCategoriesRepository } from "./scategories.repository";
import { SCategoriesService } from "./scategories.service";
import { SubCategory, SubCategorySchema } from "./schemas/subcategories.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: SubCategory.name, schema: SubCategorySchema }])],
    controllers: [SCategoriesController],
    providers: [SCategoriesService, SCategoriesRepository]
})
export class SCategoriesModule {}