import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import {FilterQuery, Model } from 'mongoose';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      userId:user.userId,
      name: user.name,
      email: user.email,
   
  
    };
  }

  // Find All Login Data///

async getAllData(): Promise<UserDetails[]> {
  return this.userModel.find({});
}

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this._getUserDetails(user);
  }

  /// userId ////////

// async getUserById(userId: string): Promise<UserDetails> {
//   return this.userModel.findOne({ userId })
// }
async getUserByEmail(email: string): Promise<UserDetails> {
  return this.userModel.findOne({ email })
}

  async create(
    name: string,
    email: string,
    hashedPassword: string,

  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      userId:uuidv4(),
    });
    return newUser.save();
  }
}
