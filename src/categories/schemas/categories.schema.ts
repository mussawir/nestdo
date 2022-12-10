import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    categoryId: string;

    @Prop()
    name: string;

    @Prop({ required: false })
    pin: string;

    @Prop({ required: false })
    pin2: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);