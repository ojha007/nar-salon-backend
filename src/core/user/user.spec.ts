import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import UserService from './user.service';
import * as request from 'supertest';
import UserModule from './user.module';

describe('UsersService', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(UserService)
      .useValue(UserService)
      .compile();
    app = module.createNestApplication();
    app.init();
  });

  it('GET /internal/users', () => {
    return request(app.getHttpServer()).get('/internal/users').expect(200);
  });
});
