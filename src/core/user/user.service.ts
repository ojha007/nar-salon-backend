import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from './user.entity';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findOne(where = {}): Promise<UserEntity | undefined> {
    return this.repository.findOne(where, { relations: ['role'], cache: true });
  }

  async count(where = {}): Promise<number> {
    return await this.repository.count(where);
  }

  async create(payload: any) {
    return await this.repository.save(payload);
  }
}
