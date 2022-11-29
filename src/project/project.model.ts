import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project {
  @Prop({ required:true,unique: true })
  name: String;

  @Prop({ required:true,unique: true })
  price: String;

  @Prop({required:true})
  description: String;
}

export type ProjectModule = Project & Document;
export const ProjectShema = SchemaFactory.createForClass(Project);
