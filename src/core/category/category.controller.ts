import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Response } from '../../decorators/response';
import CategoryService from './category.service';
import { CategoryRequestDto } from './dto/category.request.dto';

@Controller('categories')
export default class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  @Response('FETCHED', ['Category'])
  async index(@Query('isActive') isActive: string) {
    return this.service.findAll(isActive);
  }

  @Post()
  @Response('CREATED', ['Category'])
  async create(@Body() payload: CategoryRequestDto) {
    return this.service.create(payload);
  }
}
