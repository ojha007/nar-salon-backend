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
const response_1 = require("../../../decorators/response");
const week_days_service_1 = require("../services/week-days.service");
let WeekDaysController = class WeekDaysController {
    constructor(service) {
        this.service = service;
    }
    async index() {
        return await this.service.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, response_1.Response)('FETCHED', ['Master week days']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeekDaysController.prototype, "index", null);
WeekDaysController = __decorate([
    (0, common_1.Controller)(['internal/master/week-days', 'master/week-days']),
    __metadata("design:paramtypes", [week_days_service_1.default])
], WeekDaysController);
exports.default = WeekDaysController;
//# sourceMappingURL=week-days.controller.js.map