import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import AppointmentModule from './appointment.module';
import AppointmentService from './appointment.service';
import * as request from 'supertest';
import RoleModule from '../roles/role.module';

describe('AppointmentController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppointmentModule, RoleModule],
    })
      .overrideProvider(AppointmentService)
      .useValue(AppointmentService)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET appointments`, () => {
    return request(app.getHttpServer()).get('/appointments').expect(200);
  });
});
