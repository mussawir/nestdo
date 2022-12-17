import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type SubCategoryDocument = SubCategory & Document;

@Schema()
export class SubCategory {
    @Prop()
    subcategoryId: string;

    @Prop()
    name: string;

    @Prop()
    categoryId: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);