import { Test, TestingModule } from '@nestjs/testing';
import { IvController } from './iv.controller';

describe('IvController', () => {
  let controller: IvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IvController],
    }).compile();

    controller = module.get<IvController>(IvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
