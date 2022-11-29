import { Module } from '@nestjs/common';
import { IvController } from './iv.controller';
import { IvService } from './iv.service';

@Module({
  controllers: [IvController],
  providers: [IvService]
})
export class IvModule {}
