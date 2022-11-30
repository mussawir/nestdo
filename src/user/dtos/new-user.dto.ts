//import { IsString, IsInt, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
export class NewUserDTO {
  

    values :{
        name: string;
        email: string;
        password: string;
    }
//     @IsString()
//    @IsNotEmpty()
//     name: string;

//     @IsEmail()
//     @IsNotEmpty()
//     email: string;

//     @IsNumber()
//     @IsNotEmpty()
//     password: string;
  
}
