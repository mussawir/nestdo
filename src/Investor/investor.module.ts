import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Investor, InvestorSchema } from "./schemas/Investor.schema";
import { InvestorController } from "./investor.controller";
import { InvestorRepository } from "./investor.repository";
import { InvestorService } from "./investor.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Investor.name, schema: InvestorSchema }])],
    controllers: [InvestorController],
    providers: [InvestorService, InvestorRepository]
})
export class InvestorModule {}