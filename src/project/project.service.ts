import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto } from './project.dto';
import { ProjectModule } from './project.module';
import { v4 as uuidv4 } from 'uuid';
interface Project {
  projectId: string;

  title: string;

  subTitle: string;

  description: string;

  risksChallenges: string;

  image: string;

  video: string;

  websiteUrl: string;

  targetAmount: string;

  investorShare: string;

  targetLaunchDate: string;

  cDFixed: string;

  duration: string;

  popId: string;

  profileId: string;

  ivProfileUrl: string;

  paymentEmail: string;

  paymentPtype: string;

  type: string;

  bankAccount: string;

  payments: string;

  varified: number;

  categoryId: string;

  subcategoryId: string;

  countryId: string;

  createdDate: string;

  updatedDate: string;
}

@Injectable()
export class ProjectService {
  project(ProjectDto: ProjectDto): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectModel('Project') private ProjectModule: Model<ProjectModule>,
  ) {}

  async Project(project: Project) {
    const CreateProject = new this.ProjectModule({

      projectId:  uuidv4(),
      title: project.title,
      subTitle: project.subTitle,
      description: project.description,
      risksChallenges: project.risksChallenges,
      image: project.image,
      video: project.video,
      websiteUrl: project.websiteUrl,
      targetAmount: project.targetAmount,
      investorShare: project.investorShare,
      targetLaunchDate: project.targetLaunchDate,
      cDFixed: project.cDFixed,
      duration: project.duration,
      popId: project.popId,
      profileId: project.profileId,
      ivProfileUrl: project.ivProfileUrl,
      paymentEmail: project.paymentEmail,
      paymentPtype: project.paymentPtype,
      type: project.type,
      bankAccount: project.bankAccount,
      payments: project.payments,
      varified: project.varified,
      categoryId: project.categoryId,
      subcategoryId: project.subcategoryId,
      countryId: project.countryId,
      createdDate: project.createdDate,
      updatedDate: project.updatedDate,
    });

    CreateProject.save();





    // try {
    //   await CreateProject.save();
    //   console.log('dataSave', CreateProject);
    // } catch (error) {
    //   if (error.message.includes('name')) {
    //     throw new HttpException('name has been taken', 404);
    //   }
    //   if (error.message.includes('price')) {
    //     throw new HttpException('price has been taken', 404);
    //   }
    //   if (error.message.includes('description')) {
    //     throw new HttpException('description has been taken', 404);
    //   }
    // }
  }
}
