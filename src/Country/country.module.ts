import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Country, CategorySchema } from "./schemas/country.schema";
import { CountryController } from "./country.controller";
import { CategoriesRepository } from "./country.repository";
import { CountryService } from "./country.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Country.name, schema: CategorySchema }])],
    controllers: [CountryController],
    providers: [CountryService, CategoriesRepository]
})
export class CountryModule {}