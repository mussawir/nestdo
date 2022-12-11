import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProjectSchema } from "./project.models";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'project', schema: ProjectSchema }])],
controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}