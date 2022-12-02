import { Controller, Get } from '@nestjs/common';
import { ProjectCatService } from '../ProjectCategories/projectCat.service';
import { ProjectCatDto } from './projectCat.dto';

@Controller('project_categories')
export class ProjectCatController {
constructor( private projectcatService:ProjectCatService){}


  @Get()
  findAll(): Promise<ProjectCatDto[]> {
    return this.projectcatService.findAll();
   
  }

   
}
