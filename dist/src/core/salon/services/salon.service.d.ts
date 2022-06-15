import { Repository } from 'typeorm';
import SalonServiceEntitiy from '../entities/salon.service.entity';
import { SalonServiceRequest } from '../request/SalonServiceRequest';
export default class SalonService {
    private repository;
    constructor(repository: Repository<SalonServiceEntitiy>);
    findAll(): Promise<SalonServiceEntitiy[]>;
    create(payload: SalonServiceRequest): Promise<SalonServiceRequest & SalonServiceEntitiy>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    updateStaus(id: number, isActive: boolean): Promise<import("typeorm").UpdateResult>;
    findById(id: number): Promise<SalonServiceEntitiy[]>;
    getAllActive(): Promise<SalonServiceEntitiy[]>;
    update(payload: SalonServiceRequest, id: number): Promise<import("typeorm").UpdateResult>;
}
