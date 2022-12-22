// import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import {
    Body,
    Controller,
    Get,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseInterceptors,
    Param, 
    Patch,
    Req,
    Res
  } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { Express } from 'express';
import { CreateProjectDto } from './dto/create-project.dto';

import { UpdateLocationDto } from './dto/up-location.dto';
import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';
import { UpdateBasicDto } from './dto/up-basic.dto';
import { UpdateBasicFileDto } from './dto/up-basic-file.dto';
import { editFileName, imageFileFilter } from 'src/utils/file-upload.utils';
import { UpdateStoryDto } from './dto/up-story.dto';
import { UpdateMyteamDto } from './dto/up-myteam.dto';
import { UpdatePaymentMethodDto } from './dto/up-paymentmethod.dto';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { UpdateProjectImageDto } from './dto/updateProjectImage.dto';
// import { FileUploadService } from './fileupload.service'
// import { diskStorage } from 'multer';
// import { extname } from 'path';
// import aws from "aws-sdk";


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
  @Patch('/location/:projectId')
  async updateLocation(@Param('projectId') projectId: string, @Body() updateLocationDto: UpdateLocationDto): Promise<Project> {
      return this.projectService.updateLocation(projectId, updateLocationDto);
  }
//Basic Update
  @Patch('/basic/:projectId')
 
  async updateBasic(@Param('projectId') projectId: string, @Body() updateBasicDto: UpdateBasicDto): Promise<Project> {
    return this.projectService.updateBasic(projectId, updateBasicDto);
  }

//Basic Update with file upload 
@Post('/basicfile/:projectId')
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './files',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }),
)  async uploadedFile(@UploadedFile() file) {
  const response = {
    originalname: file.originalname,
    filename: file.filename,
  };
  return response;
}
 
//Image upload and Update
 @Patch('/updateProjectImage/:projectId')
 async updateImage(@Param('projectId') projectId: string, @Body() updateProjectImageDto: UpdateProjectImageDto): Promise<Project> {
     return this.projectService.updateProjectImage(projectId, updateProjectImageDto);
 }

// @Patch("/basicfile/:projectId")
// updateData(): string {
//   return 'This action returns all Data';
// }
  


// async updateBasicfile(@UploadedFile() file) {
//   const response = {
//     originalname: file.originalname,
//     filename: file.filename,
//   };
//   return response;
// }

// async updateBasicfile(@Param('projectId') projectId: string, @Body() updateBasicFileDto: UpdateBasicFileDto): Promise<Project> {
//     return this.projectService.updateBasicFile(projectId, updateBasicFileDto);
// }


  //Funding Update
  @Patch('/funding/:projectId')
  async updateFunding(@Param('projectId') projectId: string, @Body() updateBasicDto: UpdateBasicDto): Promise<Project> {
      return this.projectService.updateBasic(projectId, updateBasicDto);
  }

  //Story Update
  @Patch('/story/:projectId')
  async updateStory(@Param('projectId') projectId: string, @Body() updateStoryDto: UpdateStoryDto): Promise<Project> {
      return this.projectService.updateStory(projectId, updateStoryDto);
  }

   //Myteam Update
   @Patch('/myteam/:projectId')
   async updateMyteam(@Param('projectId') projectId: string, @Body() updateMyteamDto: UpdateMyteamDto): Promise<Project> {
       return this.projectService.updateMyteam(projectId, updateMyteamDto);
   }

    //PaymentMethod Update
    @Patch('/payment/:projectId')
    async updatePaymentMethod(@Param('projectId') projectId: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<Project> {
        return this.projectService.updatePaymentMethod(projectId, updatePaymentMethodDto);
    }


}
