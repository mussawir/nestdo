import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ProjectShema } from './project.model';
import { ProjectService } from './project.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'project',
        schema: ProjectShema,
      },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export  class ProjectModule {}
