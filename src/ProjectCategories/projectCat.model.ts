import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProjectCat {
  @Prop()
  Art:string;
  @Prop()
  Comics:string;
  @Prop()
  Crafts:string; 
  @Prop()
  Dance :string;
  @Prop()
  Design:string;
  @Prop()
  Fashion:string;
  @Prop()
  Film:string;
  @Prop()
  Food:string;
  @Prop()
  Games:string;
  @Prop()
  Journalism:string;
  @Prop()
  Music:string;
  @Prop()
  Photography:string;
  @Prop()
  Publishing:string;
  @Prop()
  Technology:string;
  @Prop()
  Theater:string;

}

export type ProjectModule = ProjectCat & Document;
export const ProjectShema = SchemaFactory.createForClass(ProjectCat);
