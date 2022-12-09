import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Project, ProjectSchema } from "./schemas/project.schema";
import { ProjectController } from "./project.controller";
import { ProjectRepository } from "./project.repository";
import { ProjectService } from "./project.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])],
    controllers: [ProjectController],
    providers: [ProjectService, ProjectRepository]
})
export class ProjectModule {}
