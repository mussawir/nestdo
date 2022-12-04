import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProjectCat {
  @Prop()
  name: string;
}

export type ProjectModule = ProjectCat & Document;
export const ProjectShema = SchemaFactory.createForClass(ProjectCat);
