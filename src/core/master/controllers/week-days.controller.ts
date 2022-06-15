import { Controller, Get } from '@nestjs/common';
import { Response } from 'src/decorators/response';
import WeekDaysService from '../services/week-days.service';

@Controller(['internal/master/week-days', 'master/week-days'])
export default class WeekDaysController {
  constructor(private readonly service: WeekDaysService) {}

  @Get()
  @Response('FETCHED', ['Master week days'])
  async index() {
    return await this.service.findAll();
  }
}
