import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Investor, InvestorDocument } from "./schemas/Investor.schema";

@Injectable()
export class InvestorRepository {
    constructor(@InjectModel(Investor.name) private InvestorModel: Model<InvestorDocument>) {}

    async findOne(InvestorFilterQuery: FilterQuery<Investor>): Promise<Investor> {
        return this.InvestorModel.findOne(InvestorFilterQuery);
    }

    async find(InvestorsFilterQuery: FilterQuery<Investor>): Promise<Investor[]> {
        return this.InvestorModel.find(InvestorsFilterQuery)
    }

    async create(Investor: Investor): Promise<Investor> {
        const newInvestor = new this.InvestorModel(Investor);
        return newInvestor.save()
    }

    async findOneAndUpdate(InvestorFilterQuery: FilterQuery<Investor>, Investor: Partial<Investor>): Promise<Investor> {
        return this.InvestorModel.findOneAndUpdate(InvestorFilterQuery, Investor, { new: true });
    }
}