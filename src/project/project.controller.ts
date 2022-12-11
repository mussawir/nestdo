import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.models';
import { ProjectUpdateDto } from './projectUpdate.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createProject(@Body() projectDto: Project) {
    return this.projectService.createProject(projectDto);
  }

  @Get()
  findAllProject() {
    return this.projectService.findAllProject();
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() updateData: ProjectUpdateDto,
  ): Promise<Project> {
    return this.projectService.updateProject(id, updateData);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string) {
    return this.projectService.deleteProject(id);
  }
}
