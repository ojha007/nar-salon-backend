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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const response_1 = require("../../decorators/response");
const appointment_service_1 = require("./appointment.service");
let AppointmentController = class AppointmentController {
    constructor(service) {
        this.service = service;
    }
    async create() {
        return;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, response_1.Response)('RECIEVED', ['Appointment']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "create", null);
AppointmentController = __decorate([
    (0, common_1.Controller)(['internal/appointments', '/appointments']),
    __metadata("design:paramtypes", [appointment_service_1.default])
], AppointmentController);
exports.default = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map