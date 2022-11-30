import { Controller, Get } from '@nestjs/common';
import { IvService } from './iv.service';

@Controller('iv')
export class IvController {
constructor( private ivService:IvService){}

    @Get()
    GetAllData(){
        // return this.ivService.GetAllData()
      return {"name": "ali"}; 

    }

   
}
