import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { Project, ProjectShema } from './project.model';
import { ProjectService } from './project.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Project',
        schema: ProjectShema,
      },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export  class ProjectModule {}
