import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateProjectDto } from "./dto/update-project.dto";

interface Project {
  name: string;
  price: string;
  description: string;
}

@Injectable()
export class ProjectService {
  project(ProjectDto: ProjectDto): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectModel('project') private ProjectModule: Model<ProjectModule>,
  ) {}

  async Project(project: Project) {
    const CreateProject = new this.ProjectModule({
      name: project.name,
      price: project.price,
      description: project.description,
    });

    CreateProject.save();
    try {
      await CreateProject.save();
      console.log('dataSave', CreateProject);
    } catch (error) {
      if (error.message.includes('name')) {
        throw new HttpException('name has been taken', 404);
      }
      if (error.message.includes('price')) {
        throw new HttpException('price has been taken', 404);
      }
      if (error.message.includes('description')) {
        throw new HttpException('description has been taken', 404);
      }
    }
  }
}
