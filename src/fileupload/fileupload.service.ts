import { Req, Res, Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';


@Injectable()
export class FileUploadService {
  constructor() {}
    getHello() {
      return { hello: 'world' };
    }
  }