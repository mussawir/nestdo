import { Injectable } from '@nestjs/common';

@Injectable()
export class IvService {
     private getData=[]

     GetAllData(){
        return this.getData
     }
}
