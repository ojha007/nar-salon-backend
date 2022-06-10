import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CategoryEntity from './category.entity';
import { CategoryRequestDto } from './dto/category.request.dto';

@Injectable()
export default class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) {}

  findAll(where = {}): Promise<CategoryEntity[]> {
    return this.repository.find(where);
  }

  findOne(id: string): Promise<CategoryEntity> {
    return this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async create(payload: CategoryRequestDto) {
    await this.repository.save(payload);
  }
}
