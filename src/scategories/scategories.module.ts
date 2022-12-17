import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SCategoriesController } from "./scategories.controller";
import { SCategoriesService } from "./scategories.service";

@Module({
    // imports: [MongooseModule.forFeature([{ name: SCategory.name, schema: SubCategorySchema }])],
    controllers: [SCategoriesController],
    providers: [SCategoriesService]
})
export class SCategoriesModule {}