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
const roles_1 = require("../../constants/roles");
const response_1 = require("../../decorators/response");
const RequestQuery_interface_1 = require("../../interfaces/RequestQuery.interface");
const isPublic_meta_1 = require("../../meta/isPublic.meta");
const role_guard_1 = require("../auth/guard/role.guard");
const appointment_service_1 = require("./appointment.service");
const Appointment_dto_1 = require("./dto/Appointment.dto");
let AppointmentController = class AppointmentController {
    constructor(service) {
        this.service = service;
    }
    async create(payload) {
        return this.service.create(payload);
    }
    async index(params) {
        params.limit = params.limit || 10;
        params.offset = params.offset || 0;
        return await this.service.findAll(params);
    }
    async update(id, payload) {
        return this.service.update(id, payload);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, isPublic_meta_1.NoAuth)(),
    (0, response_1.Response)('RECIEVED', ['Appointment']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Appointment_dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, role_guard_1.default)(roles_1.Role.Admin)),
    (0, response_1.Response)('FETCHED', ['Appointment']),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestQuery_interface_1.AppointmentQueryInterface]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "index", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)(roles_1.Role.Admin)),
    (0, response_1.Response)('RECIEVED', ['Appointment']),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Appointment_dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "update", null);
AppointmentController = __decorate([
    (0, common_1.Controller)(['internal/appointments', 'appointments']),
    __metadata("design:paramtypes", [appointment_service_1.default])
], AppointmentController);
exports.default = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map