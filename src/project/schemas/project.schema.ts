import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type ProjectDocument = Project & Document;

@Schema()
export class Project {

    @Prop()
    projectId: string;

    @Prop()
    userId:string;

    @Prop()
    categoryId: string
    
    @Prop()
    subcategoryId: string

    @Prop({ required: false })
    title: string
    
    @Prop({ required: false })
    subTitle: string

    @Prop({ required: false })
    description: string
    
    @Prop({ required: false })
    risksChallenges: string
    
    @Prop({ required: false })
    projectImage: string
    
    @Prop({ required: false })
    video: string
    
    @Prop({ required: false })
    websiteUrl: string
    
    @Prop({ required: false })
    targetAmount: string
    
    @Prop({ required: false })
    investorShare: string
    
    @Prop({ required: false })
    targetLaunchDate: string
    
    @Prop({ required: false })
    cDFixed: string
    
    @Prop({ required: false })
    duration: string
    
    @Prop({ required: false })
    popId: string
    
    @Prop({ required: false })
    profileId: string
    
    @Prop({ required: false })
    ivProfileUrl: string
    
    @Prop({ required: false })
    paymentEmail: string
    
    @Prop({ required: false })
    paymentPtype: string
    
    @Prop({ required: false })
    type: string
    
    @Prop({ required: false })
    bankAccount: string
    
    @Prop({ required: false })
    payments: string
    
    @Prop({ required: false })
    varified: string;
    
    @Prop({ required: false })
    countryId: string


  ///Discover Field//
    @Prop({ required: false })
    projectwelove: string

    @Prop({ required: false })
    trending: string

    @Prop({ required: false })
    arts: string

    @Prop({ required: false })
    comicsillustration: string

    @Prop({ required: false })
    comics: string

    @Prop({ required: false })
    crafts: string

    @Prop({ required: false })
    filmvideo: string

    @Prop({ required: false })
    food: string;

    @Prop({default: Date.now})
    createdDate: string;

    @Prop({default: Date.now})
    updatedDate: string;
}


export const ProjectSchema = SchemaFactory.createForClass(Project);