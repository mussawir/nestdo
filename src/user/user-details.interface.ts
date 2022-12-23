import { IsString, IsInt, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
export class UserDetails {
  @IsString()
@IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
    userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  email: string;





}
