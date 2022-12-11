import { Injectable } from '@nestjs/common';
import { Project, ProjectDocument } from './project.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('project')
    private readonly ProjectModel: Model<ProjectDocument>,
  ) {}

  //  creating a Project
  async createProject(project: Project): Promise<Project> {
    const newProject = new this.ProjectModel(project);
    return newProject.save();
  }

  //  find All Project the collection
  async findAllProject() {
    return this.ProjectModel.find({})
      .then((project) => {
        return project;
      })
      .catch((err) => console.log(err));
  }

  // upadting the Project
  async updateProject(id, data): Promise<Project> {
    return this.ProjectModel.findByIdAndUpdate(id, data, { new: true });
  }

  // deleting the Project
  async deleteProject(id) {
    return this.ProjectModel.findByIdAndRemove(id);
  }
}
