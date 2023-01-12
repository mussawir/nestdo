import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InvestorDocument = Investor & Document;

@Schema()
export class Investor {
    @Prop()
    investorId:string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    amount: string;

    @Prop()
    invest: string;

}

export const InvestorSchema = SchemaFactory.createForClass(Investor);