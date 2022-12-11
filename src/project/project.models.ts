import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  projectId: string;

  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  subTitle: string;

  @Prop()
  description: string;

  @Prop({ required: false })
  risksChallenges: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  video: string;

  @Prop({ required: false })
  websiteUrl: string;

  @Prop({ required: false })
  targetAmount: string;

  @Prop({ required: false })
  investorShare: string;

  @Prop({ required: false })
  targetLaunchDate: string;

  @Prop({ required: false })
  cDFixed: string;

  @Prop({ required: false })
  duration: string;

  @Prop({ required: false })
  popId: string;

  @Prop({ required: false })
  profileId: string;

  @Prop({ required: false })
  ivProfileUrl: string;

  @Prop({ required: false })
  paymentEmail: string;

  @Prop({ required: false })
  paymentPtype: string;

  @Prop({ required: false })
  type: string;

  @Prop({ required: false })
  bankAccount: string;

  @Prop({ required: false })
  payments: string;

  @Prop({ required: false })
  varified: number;

  @Prop()
  categoryId: string;

  @Prop()
  subcategoryId: string;

  @Prop({ required: false })
  countryId: string;

  @Prop({ default: Date.now })
  date_added: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
