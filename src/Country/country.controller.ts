import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

import { Country } from './schemas/country.schema';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':countryId')
  async getCategory(@Param('countryId') countryId: string): Promise<Country> {
    return this.countryService.getCountryIdById(countryId);
  }
  
  @Get()
  async getcountry(): Promise<Country[]> {
      return this.countryService.getCountry();
  }

  @Post()
  async createCategory(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
      return this.countryService.createCountry(createCountryDto.name)
  }

  @Patch(':countryId')
  async updateCategory(@Param('countryId') countryId: string, @Body() updateCountryDto: UpdateCountryDto): Promise<Country> {
      return this.countryService.updateCountry(countryId, updateCountryDto);
  }
}
