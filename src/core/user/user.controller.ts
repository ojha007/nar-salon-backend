import { Controller } from '@nestjs/common';
import { Response } from '../../decorators/response';
import UserService from './user.service';

@Controller('internal/users')
export default class UserController {
  constructor(private readonly service: UserService) {}

  @Response('FETCHED', ['Users'])
  async index() {
    return await this.service.findAll();
  }
}
