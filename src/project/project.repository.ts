import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Project, ProjectDocument } from "./schemas/project.schema";

@Injectable()
export class ProjectRepository {
    constructor(@InjectModel(Project.name) private ProjectModel: Model<ProjectDocument>) {}

    async findOne(ProjectFilterQuery: FilterQuery<Project>): Promise<Project> {
        return this.ProjectModel.findOne(ProjectFilterQuery);
    }

    async find(ProjectFilterQuery: FilterQuery<Project>): Promise<Project[]> {
        return this.ProjectModel.find(ProjectFilterQuery)
    }

    async create(Project: Project): Promise<Project> {
        const newProject = new this.ProjectModel(Project);
        return newProject.save()
    }
