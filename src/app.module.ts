import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IvModule } from './iv/iv.module';
import { ProjectModule } from './project/project.module';
import { ProjectCatModule } from './ProjectCategories/projectCat.module';
import { UserModule } from './user/user.module';
import {CategoriesModule} from './categories/categories.module'
import { SubCategoriesModule } from './sub-categories/sub-categories.module';

@Module({
  imports: [
 
  MongooseModule.forRoot('mongodb+srv://doadmin:v5X4mW98T7aD12Z3@investingverse-1f75c212.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=investingverse&tls=true'),
    IvModule,
    ProjectModule,
     UserModule,
    AuthModule,
    ProjectModule,
    ProjectCatModule,
    CategoriesModule ,
    SubCategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
