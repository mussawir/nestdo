import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCountryDto } from "./dto/update-country.dto";

import { Country } from "./schemas/country.schema";
import { CountryRepository } from "./country.repository";

@Injectable()
export class CountryService{
    constructor(private readonly countryRepository: CountryRepository) {}

    async getCountryById(CountryId: string): Promise<Country> {
        return this.countryRepository.findOne({ CountryId })
    }

    async getCountry(): Promise<Country[]> {
        return this.countryRepository.find({});
    }

    async createCountry(name: string): Promise<Country> {
        return this.countryRepository.create({
            countryId: uuidv4(),
            name
        })
    }

    async updateCountry(CountryId: string, CountryUpdates: UpdateCountryDto): Promise<Country> {
        return this.countryRepository.findOneAndUpdate({ CountryId }, CountryUpdates);
    }
}