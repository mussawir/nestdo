import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type SubCategoryDocument = SubCategory & Document;

@Schema()
export class SubCategory {
    @Prop()
    categoryId: string;

    @Prop()
    name: string;

    @Prop()   
     sub_categoryId:string;

}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);