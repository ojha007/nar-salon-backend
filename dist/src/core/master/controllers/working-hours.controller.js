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
const WorkingHoursRequest_1 = require("../request/WorkingHoursRequest");
const working_hours_service_1 = require("../services/working-hours.service");
let WorkingHoursController = class WorkingHoursController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return await this.service.findAll();
    }
    async create(payload) {
        return await this.service.create(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, response_1.Response)('FETCHED', ['Working Days']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkingHoursController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, response_1.Response)('CREATED', ['Working Days']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkingHoursRequest_1.WorkingHoursRequest]),
    __metadata("design:returntype", Promise)
], WorkingHoursController.prototype, "create", null);
WorkingHoursController = __decorate([
    (0, common_1.Controller)(['master/working-days', 'internal/master/working-days']),
    __metadata("design:paramtypes", [working_hours_service_1.default])
], WorkingHoursController);
exports.default = WorkingHoursController;
//# sourceMappingURL=working-hours.controller.js.map