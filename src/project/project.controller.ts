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
    Req
  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateLocationDto } from './dto/up-location.dto';
import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';
import { UpdateBasicDto } from './dto/up-basic.dto';
import { UpdateStoryDto } from './dto/up-story.dto';
import { UpdateMyteamDto } from './dto/up-myteam.dto';
import { UpdatePaymentMethodDto } from './dto/up-paymentmethod.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import aws from "aws-sdk";


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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
      return file;
    }

   
    @Post('fileupload')
    @UseInterceptors(FileInterceptor('file'))
    fileUpload(@UploadedFile() file: Express.Multer.File) {
      const s3 = new aws.S3({
        endpoint: "nyc3.digitaloceanspaces.com",
        accessKeyId: "DO00FM4ZCTYDCCMRHGTU",
        secretAccessKey: "agrtXp8vSvQwyw3wuYvpQUXI8QFttVGHK8cSXacy9es",
      });
      s3.upload({
        Bucket: "ivspace", // Add bucket name here
        ACL: "public-read", // Specify whether anyone with link can access the file
        Key: `test/test.png`, // Specify folder and file name
        Body: file,
      }, {
        partSize: 10 * 1024 * 1024,
        queueSize: 10,
      }).send((err) => {
        if (err) return "Error";
        });
      console.log(file);
      return file;
    }

}
