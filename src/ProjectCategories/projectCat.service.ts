import { ProjectCatDto } from "./projectCat.dto";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ProjectCatService {
  constructor(
    @InjectModel('project_categories')
    private readonly productModel: Model<ProjectCatDto>,
  ) {}


  async findAll(): Promise<ProjectCatDto[]> {
    return this.productModel.find().exec();
  }
}
