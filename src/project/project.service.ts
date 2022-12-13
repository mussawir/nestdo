import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateProjectDto } from "./dto/update-project.dto";
import { UpdateLocationDto } from "./dto/up-location.dto";
import { UpdateBasicDto } from "./dto/up-basic.dto";

import { ProjectRepository } from "./project.repository";
import { Project } from "./schemas/project.schema";

@Injectable()
export class ProjectService{
    constructor(private readonly projectRepository: ProjectRepository) {}

    async getProjectById(projectId: string): Promise<Project> {
        return this.projectRepository.findOne({ projectId })
    }

    async getProject(): Promise<Project[]> {
        return this.projectRepository.find({});
    }

    // async createCategory(name: string): Promise<Project> {
    //     return this.projectRepository.create({
    //         categoryId: uuidv4(),
    //         categoryId,
    //         pin: null, pin2: null
    //     })
    // }

    async createProject(categoryId: string, subcategoryId:string): Promise<Project> {
        return this.projectRepository.create({
            projectId: uuidv4(),
            categoryId,
            subcategoryId,
            title:null,
            subTitle:null,
            description: null,
            risksChallenges: null,
            image: null,
            video: null,
            websiteUrl: null,
            targetAmount: null,
            investorShare: null,
            targetLaunchDate: null,
            cDFixed: null,
            duration: null,
            popId: null,
            profileId: null,
            ivProfileUrl: null,
            paymentEmail: null,
            paymentPtype: null,
            type: null,
            bankAccount: null,
            payments: null,
            varified: null,
            countryId: null,
            projectwelove: null,
            trending: null,
            arts: null,
            comicsillustration: null,
            comics: null,
            crafts: null,
            filmvideo: null,
            food: null,
            createdDate: null,
            updatedDate: null,
            
        })
    }

    async updateProject(projectId: string, projectUpdates: UpdateProjectDto): Promise<Project> {
        return this.projectRepository.findOneAndUpdate({ projectId }, projectUpdates);
    }

    async updateLocation(projectId: string, updateLocation: UpdateLocationDto): Promise<Project> {
        return this.projectRepository.updateLocation({ projectId }, updateLocation);
    }

    async updateBasic(projectId: string, updateBasic: UpdateBasicDto): Promise<Project> {
        return this.projectRepository.updateBasic({ projectId }, updateBasic);
    }
}