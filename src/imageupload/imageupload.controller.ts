import { Controller, Post, Req, Res } from '@nestjs/common';
import { ImageUploadService } from './imageupload.service';

@Controller('Imageupload')
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) {}
  @Post()
  async create(@Req() request, @Res() response) {
    try {
      // await this.imageUploadService.fileupload(request, response);
      return response
        .status(200)
        .json(`Uploading`);
    } catch (error) {
      return response
        .status(500)
        .json(`Failed to upload image file: ${error.message}`);
    }
  }
}