import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
    @Prop()
    CountryId:string;
    @Prop()
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Country);