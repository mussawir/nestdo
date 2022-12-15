import { Req, Res, Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const AWS_S3_BUCKET_NAME = "ivspace"; //process.env.AWS_S3_BUCKET_NAME;
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: "DO00FM4ZCTYDCCMRHGTU", //process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: "agrtXp8vSvQwyw3wuYvpQUXI8QFttVGHK8cSXacy9es", //process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class ImageUploadService {
  constructor() {}
  async fileupload(@Req() req, @Res() res) {
    try {
      this.upload(req, res, function(error) {
        if (error) {
          console.log(error);
          return res.status(404).json(`Failed to upload image file: ${error}`);
        }
        return res.status(201).json(req.file.location);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(`Failed to upload image file: ${error}`);
    }
  }

  upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWS_S3_BUCKET_NAME,
      acl: 'public-read',
      key: function(request, file, cb) {
        cb(null, `${Date.now().toString()} - ${file.originalname}`);
      },
    }),
  }).array('upload', 1);

    // @Post('fileupload')
    // @UseInterceptors(FileInterceptor('file'))
    // fileUpload(@UploadedFile() file: Express.Multer.File) {
    //   const s3 = new aws.S3({
    //     endpoint: "nyc3.digitaloceanspaces.com",
    //     accessKeyId: "DO00FM4ZCTYDCCMRHGTU",
    //     secretAccessKey: "agrtXp8vSvQwyw3wuYvpQUXI8QFttVGHK8cSXacy9es",
    //   });
    //   const name = new type(arguments);
    //   // s3.upload({
    //   //   Bucket: "ivspace", // Add bucket name here
    //   //   ACL: "public-read", // Specify whether anyone with link can access the file
    //   //   Key: `test/test.png`, // Specify folder and file name
    //   //   Body: file,
    //   // }, {
    //   //   partSize: 10 * 1024 * 1024,
    //   //   queueSize: 10,
    //   // }).send((err) => {
    //   //   if (err) return "Error";
    //   //   });
    //   console.log(file);
    //   return file;
    // }

}