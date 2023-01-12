import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateInvestorDto } from "./dto/update-investor.dto";

import { Investor, InvestorRepository } from "./schemas/Investor.schema";
import { InvestorRepository } from "./investor.repository";

@Injectable()
export class InvestorService{
    constructor(private readonly investorRepository: InvestorRepository) {}

    async getInvestorById(investorId: string): Promise<Investor> {
        return this.investorRepository.findOne({ investorId })
    }

    async getInvestor(): Promise<Investor[]> {
    return this.investorRepository.find({});
    }

    async createInvestor(name: string): Promise<Investor> {
        return this.investorRepository.create({
            investorId: uuidv4(),
            name,
            email,
            amount,
            invest
        })
    }

    async updateInvestor(investorId: string, InvestorUpdates: UpdateInvestorDto): Promise<Investor> {
        return this.investorRepository.findOneAndUpdate({ investorId }, InvestorUpdates);
    }
}