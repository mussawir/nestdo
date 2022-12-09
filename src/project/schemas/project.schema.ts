import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop()
    projectId:string;
    
    @Prop()
    title: string;
    
    @Prop()
    subTitle: string;

    @Prop()
    description: string;
    
    @Prop()
    risksChallenges: string;
    
    @Prop()
    image: string;
    
    @Prop()
    video: string;
    
    @Prop()
    websiteUrl: string;
    
    @Prop()
    targetAmount: string;
    
    @Prop()
    investorShare: string;
    
    @Prop()
    targetLaunchDate: string;
    
    @Prop()
    cDFixed: string;
    
    @Prop()
    duration: string;
    
    @Prop()
    popId: string;
    
    @Prop()
    profileId: string;
    
    @Prop()
    ivProfileUrl: string;
    
    @Prop()
    paymentEmail: string;
    
    @Prop()
    paymentPtype: string;
    
    @Prop()
    type: string;
    
    @Prop()
    bankAccount: string;
    
    @Prop()
    payments: string;
    
    @Prop()
    varified: number;
    
    @Prop()
    categoryId: string;
    
    @Prop()
    subcategoryId: string;
    
    @Prop()
    countryId: string;
    
    @Prop()
    createdDate: string;
    
    @Prop()
    updatedDate: string;
  
}

export const ProjectSchema = SchemaFactory.createForClass(Project);