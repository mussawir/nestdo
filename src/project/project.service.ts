import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateProjectDto } from "./dto/update-project.dto";

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

    async createProject(name: string): Promise<Project> {
        return this.projectRepository.create({
            projectId: uuidv4(),
            name
        })
    }

    async updateProject(projectId: string, ProjectUpdates: UpdateProjectDto): Promise<Project> {
        return this.projectRepository.findOneAndUpdate({ projectId }, ProjectUpdates);
    }
}