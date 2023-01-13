import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';
import { UserDetails } from './user-details.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  //userId //////////////

  // @Get(':userId')
  // async getuserId(@Param('userId') userId: string): Promise<UserDetails> {
  //   return this.userService.getUserById(userId);
  // }

  @Get('/getid/:email')
  async getuserEmail(@Param('email') email: string): Promise<UserDetails> {
    return this.userService.getUserByEmail(email);
  }

  ///Get User all Data///////////
  @Get()
  async getAllData(): Promise<UserDetails[]> {
    return this.userService.getAllData();
  }
}
