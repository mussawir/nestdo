import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Country, CountryDocument } from "./schemas/country.schema";

@Injectable()
export class CategoriesRepository {
    constructor(@InjectModel(Country.name) private CountryModel: Model<CountryDocument>) {}

    async findOne(CountryFilterQuery: FilterQuery<Country>): Promise<Country> {
        return this.CountryModel.findOne(CountryFilterQuery);
    }

    async find(CountrysFilterQuery: FilterQuery<Country>): Promise<Country[]> {
        return this.CountryModel.find(CountrysFilterQuery)
    }

    async create(Country: Country): Promise<Country> {
        const newCountry = new this.CountryModel(Country);
        return newCountry.save()
    }

    async findOneAndUpdate(CountryFilterQuery: FilterQuery<Country>, Country: Partial<Country>): Promise<Country> {
        return this.CountryModel.findOneAndUpdate(CountryFilterQuery, Country, { new: true });
    }
}