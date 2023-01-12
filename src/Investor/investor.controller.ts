import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-investor.dto';
import { UpdateInvestorDto } from './dto/update-investor.dto';

import { Investor } from './schemas/Investor.schema';
import { InvestorService } from './investor.service';

@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @Get(':investorId')
  async getCountry(@Param('investorId') investorId: string): Promise<Investor> {
    return this.investorService.getCountryById(investorId);
  }
  
  @Get()
  async getcountry(): Promise<Investor[]> {
      return this.investorService.getCountry();
  }

  @Post()
  async createInvestor(@Body() createInvestorDto: CreateInvestorDto): Promise<Investor> {
      return this.investorService.createInvestor(createInvestorDto.name)
  }

  @Patch(':investorId')
  async updateInvestor(@Param('investorId') investorId: string, @Body() updateInvestorDto: UpdateInvestorDto): Promise<Investor> {
      return this.investorService.updateInvestor(investorId, updateInvestorDto);
  }
}
