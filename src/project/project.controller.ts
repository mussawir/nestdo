import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';


@Controller('project')
export class ProjectController {

constructor(
    private readonly ProjectService:ProjectService
){}

    @Post()
    Project(@Body() ProjectDto:ProjectDto): any{
  return this.ProjectService.Project(ProjectDto)
    }
}
