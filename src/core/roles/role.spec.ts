import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import RoleModule from './role.module';
import { RolesService } from './role.service';
import * as request from 'supertest';

describe('RolesService', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [RoleModule],
    })
      .overrideProvider(RolesService)
      .useValue(RolesService)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });
  it('GET /internal/roles', () => {
    return request(app.getHttpServer()).get('/internal/roles').expect(200);
  });
});
