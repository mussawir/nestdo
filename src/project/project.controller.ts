import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
 //import { Project } from './Project.model';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto';


@Controller('project')
export class ProjectController {

constructor(
    private readonly ProjectService:ProjectService
){}
// @Get()
// @Get('find?:bFind')
//   async get(@Param('bFind') bFind: boolean): Promise<Country> {
//     return this.projectService.getSearch(bFind);
//   }

@Get('find?:bFind')
find(@Param('bfind')){
    // return this.ivService.GetAllData()
  return {"name": "ali"}; 

}

    @Post()
    Project(@Body() ProjectDto:ProjectDto): any{
  return this.ProjectService.Project(ProjectDto)
    }
}
