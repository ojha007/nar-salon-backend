import { SalonServiceRequest } from '../request/SalonServiceRequest';
import SalonService from '../services/salon.service';
export default class SalonServiceController {
    private readonly service;
    constructor(service: SalonService);
    index(): Promise<import("../entities/salon.service.entity").default[]>;
    create(payload: SalonServiceRequest): Promise<any[]>;
    update(payload: SalonServiceRequest, id: number): Promise<any[]>;
    updateStatus(isActive: boolean, id: number): Promise<any[]>;
    destroy(id: number): Promise<any[]>;
    show(id: number): Promise<import("../entities/salon.service.entity").default[]>;
}
