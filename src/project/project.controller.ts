import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':projectId')
  async getproject(@Param('projectId') projectId: string): Promise<Project> {
    return this.projectService.getProjectById(projectId);
  }
  
  @Get()
  async getProject(): Promise<Project[]> {
      return this.projectService.getProject();
  }

  @Post('create-project')
  async createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
      return this.projectService.createProject(createProjectDto.categoryId,createProjectDto.subcategoryId,)
  }


  // @Post()
  // async createProject(@Body() createProjectDto: Project){
  //   //console.log()
  //   return this.projectService.createProject(createProjectDto)
  // }

  @Patch(':projectId')
  async updateProject(@Param('projectId') projectId: string, @Body() updateProjectDto: UpdateProjectDto): Promise<Project> {
      return this.projectService.updateProject(projectId, updateProjectDto);
  }
}
