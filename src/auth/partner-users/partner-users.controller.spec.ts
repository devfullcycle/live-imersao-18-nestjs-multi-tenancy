import { Test, TestingModule } from '@nestjs/testing';
import { PartnerUsersController } from './partner-users.controller';

describe('PartnerUsersController', () => {
  let controller: PartnerUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartnerUsersController],
    }).compile();

    controller = module.get<PartnerUsersController>(PartnerUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
