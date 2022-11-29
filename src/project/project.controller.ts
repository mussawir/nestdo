import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
// import { Project } from './Project.model';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto';


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
