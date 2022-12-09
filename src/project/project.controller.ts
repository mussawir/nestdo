import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateCSProjectDto } from './dto/update-csproject.dto';

import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';

@Controller('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':projectId')
  async getProject(@Param('projectId') projectId: string): Promise<Project> {
    return this.projectService.getProjectIdById(projectId);
  }
  
  @Get()
  async getproject(): Promise<Project[]> {
      return this.projectService.getProject();
  }

  @Post()
  async createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
      return this.projectService.createProject(createProjectDto.categoryId,createProjectDto.subcategoryId )
    }
//update 
  @Patch(':projectId')
  async updateProject(@Param('projectId') projectId: string, @Body() updateCSProjectDto: UpdateCSProjectDto): Promise<Project> {
      return this.projectService.updateProject(projectId, updateCSProjectDto);
  }
}
