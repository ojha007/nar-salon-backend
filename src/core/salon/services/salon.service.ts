import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SalonServiceEntitiy from '../entities/salon.service.entity';
import { SalonServiceRequest } from '../request/SalonServiceRequest';

@Injectable()
export default class SalonService {
  constructor(
    @InjectRepository(SalonServiceEntitiy)
    private repository: Repository<SalonServiceEntitiy>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }
  async create(payload: SalonServiceRequest) {
    return await this.repository.save(payload);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }

  async updateStaus(id: number, isActive: boolean) {
    return this.repository.update({ id }, { isActive });
  }

  async findById(id: number) {
    return this.repository.find({ where: { id } });
  }

  async getAllActive() {
    return this.repository.find({ where: { isActive: true } });
  }

  async update(payload: SalonServiceRequest, id: number) {
    return this.repository.update({ id }, payload);
  }
}
