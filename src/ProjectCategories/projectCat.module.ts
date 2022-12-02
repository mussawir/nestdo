import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectCatController } from './projectCat.controller';
import { ProjectShema } from './projectCat.model';
import { ProjectCatService } from './projectCat.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'project_categories',
        schema: ProjectShema,
      },
    ]),
  ],
  controllers: [ProjectCatController],
  providers: [ProjectCatService],
})
export  class ProjectCatModule {}
