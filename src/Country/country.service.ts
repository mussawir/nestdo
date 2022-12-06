import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCountryDto } from "./dto/update-country.dto";

import { Country } from "./schemas/country.schema";
import { CategoriesRepository } from "./country.repository";

@Injectable()
export class CountryService{
    constructor(private readonly categoriesRepository: CategoriesRepository) {}

    async getCountryIdById(CountryId: string): Promise<Country> {
        return this.categoriesRepository.findOne({ CountryId })
    }

    async getCountry(): Promise<Country[]> {
        return this.categoriesRepository.find({});
    }

    async createCountry(name: string): Promise<Country> {
        return this.categoriesRepository.create({
            CountryId: uuidv4(),
            name
        })
    }

    async updateCountry(CountryId: string, CountryUpdates: UpdateCountryDto): Promise<Country> {
        return this.categoriesRepository.findOneAndUpdate({ CountryId }, CountryUpdates);
    }
}