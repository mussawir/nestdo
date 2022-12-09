import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateCSProjectDto } from "./dto/update-csproject.dto";

import { Project } from "./schemas/project.schema";
import { ProjectRepository } from "./project.repository";

@Injectable()
export class ProjectService{
    constructor(private readonly projectRepository: ProjectRepository) {}

    async getProjectIdById(projectId: string): Promise<Project> {
        return this.projectRepository.findOne({ projectId })
    }

    async getProject(): Promise<Project[]> {
        return this.projectRepository.find({});
    }

    async createProject(categoryId:string, subcategoryId:string): Promise<Project> {
        return this.projectRepository.create({
            projectId: uuidv4(),
            categoryId,
            subcategoryId,
        })
    }

    async updateProject(projectId: string, ProjectCSUpdates: UpdateCSProjectDto): Promise<Project> {
        return this.projectRepository.findOneAndUpdate({ projectId }, ProjectCSUpdates);
    }
}