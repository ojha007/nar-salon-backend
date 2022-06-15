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
const response_1 = require("../../../decorators/response");
const SalonServiceRequest_1 = require("../request/SalonServiceRequest");
const salon_service_1 = require("../services/salon.service");
let SalonServiceController = class SalonServiceController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return this.service.findAll();
    }
    async create(payload) {
        await this.service.create(payload);
        return [];
    }
    async update(payload, id) {
        await this.service.update(payload, id);
        return [];
    }
    async updateStatus(isActive, id) {
        await this.service.updateStaus(id, isActive);
        return [];
    }
    async destroy(id) {
        await this.service.delete(id);
        return [];
    }
    async show(id) {
        return this.service.findById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, response_1.Response)('FETCHED', ['Services']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, response_1.Response)('CREATED', ['Services']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SalonServiceRequest_1.SalonServiceRequest]),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, response_1.Response)('UPDATED', ['Services']),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SalonServiceRequest_1.SalonServiceRequest, Number]),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('update-status/:id'),
    (0, response_1.Response)('UPDATED', ['Service Status']),
    __param(0, (0, common_1.Body)('status')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Number]),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, response_1.Response)('DELETED', ['Service']),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "destroy", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, response_1.Response)('FETCHED', ['Service']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalonServiceController.prototype, "show", null);
SalonServiceController = __decorate([
    (0, common_1.Controller)(['internal/salon-services', 'salon-services']),
    __metadata("design:paramtypes", [salon_service_1.default])
], SalonServiceController);
exports.default = SalonServiceController;
//# sourceMappingURL=salon.service.controller.js.map