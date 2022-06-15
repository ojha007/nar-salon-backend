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
exports.WorkingHoursRequest = void 0;
const class_validator_1 = require("class-validator");
const isExists_1 = require("../../../decorators/isExists");
const week_days_entity_1 = require("../entities/week-days.entity");
class WorkingHoursRequest {
}
__decorate([
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], WorkingHoursRequest.prototype, "startHour", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkingHoursRequest.prototype, "endHour", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, isExists_1.IsExists)({
        table: 'master_week_days',
        column: 'id',
    }),
    __metadata("design:type", week_days_entity_1.default)
], WorkingHoursRequest.prototype, "weekDay", void 0);
exports.WorkingHoursRequest = WorkingHoursRequest;
//# sourceMappingURL=WorkingHoursRequest.js.map