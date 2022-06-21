"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const custom_exception_1 = require("../../exceptions/custom.exception");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("./appointment.entity");
const appointment_status_entity_1 = require("./appointment.status.entity");
const status_service_1 = require("./status.service");
let AppointmentService = class AppointmentService {
    constructor(repository, statusService) {
        this.repository = repository;
        this.statusService = statusService;
    }
    async create(payload) {
        let status = await this.statusService.defaultStatus();
        if (!status)
            throw new custom_exception_1.default(422, 'MASTER_MISSING');
        payload.status = status;
        let slotRequest = {
            service: payload.service,
            date: payload.date,
            slotFrom: payload.slotFrom,
            slotTo: payload.slotTo,
        };
        let isSlotBooked = await this.isSlotBooked(slotRequest);
        if (isSlotBooked)
            throw new custom_exception_1.default(422, 'SLOT_NOT_AVALILABLE');
        await this.repository.save(payload);
        return;
    }
    async isSlotBooked(params) {
        let status = await this.statusService.find({
            name: appointment_status_entity_1.default.BOOKED,
        });
        return await this.repository.count({
            where: Object.assign(Object.assign({}, params), { status: status.id }),
        });
    }
    async findAll(params) {
        let baseQuery = `
    select 
        ap.id,
        ap.date::text,
        ap.slot_to                                      as "slotTo",
        ap.slot_from                                    as "slotFrom",
        ap.customer_name                                as "customerName",
        ap.phone,
        json_build_object('id', se.id, 'name', se.name) as service,
        json_build_object('id', st.id, 'name', st.name) as status
      from appointments ap
      join salon_services se on ap.service_id = se.id
      join appointment_statuses st on st.id = ap.status_id
      where true 
      
    `;
        let replacements = [];
        if (params.statusId) {
            baseQuery += ` and st.id=$${replacements.length + 1}`;
            replacements.push(params.statusId);
        }
        if (params.serviceId) {
            baseQuery += ` and se.id=$${replacements.length + 1}`;
            replacements.push(params.serviceId);
        }
        if (params.date) {
            baseQuery += ` and date::date=$${replacements.length + 1}`;
            replacements.push(params.date);
        }
        baseQuery += ` order by date desc,slot_from asc `;
        if (params.limit) {
            baseQuery += ` limit $${replacements.length + 1}`;
            replacements.push(params.limit);
        }
        if (params.offset) {
            baseQuery += ` offset $${replacements.length + 1}`;
            replacements.push(params.offset);
        }
        return this.repository.query(baseQuery, replacements);
    }
    async update(id, payload) {
        let slotRequest = {
            id,
            service: payload.service,
            date: payload.date,
            slotFrom: payload.slotFrom,
            slotTo: payload.slotTo,
        };
        let isSlotBooked = await this.isSlotBooked(slotRequest);
        if (isSlotBooked)
            throw new custom_exception_1.default(422, 'SLOT_NOT_AVALILABLE');
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        status_service_1.default])
], AppointmentService);
exports.default = AppointmentService;
//# sourceMappingURL=appointment.service.js.map