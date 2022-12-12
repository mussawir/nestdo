import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IvModule } from './iv/iv.module';
import { UserModule } from './user/user.module';
import {CategoriesModule} from './categories/categories.module'
import { SubCategoriesModule } from './subCategories/subcategories.module';
import { ProjectModule } from './project/project.module';
import { CountryModule } from './Country/country.module';


@Module({
  imports: [
 
    MongooseModule.forRoot('mongodb+srv://doadmin:v5X4mW98T7aD12Z3@investingverse-1f75c212.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=investingverse&tls=true'),
     //MongooseModule.forRoot('mongodb://localhost:27017/nestproject'),
    IvModule,
    ProjectModule,
    UserModule,
    AuthModule,
    CategoriesModule ,
    SubCategoriesModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
