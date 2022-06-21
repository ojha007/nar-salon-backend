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
exports.SlotUpdateInterface = exports.SlotRequestInterface = exports.AppointmentDto = void 0;
const class_validator_1 = require("class-validator");
const salon_service_entity_1 = require("../../salon/entities/salon.service.entity");
const isExists_1 = require("../../../decorators/isExists");
const appointment_status_entity_1 = require("../appointment.status.entity");
class AppointmentDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "slotFrom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "slotTo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "customerName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.Length)(10, 10),
    __metadata("design:type", String)
], AppointmentDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, isExists_1.IsExists)({
        table: 'salon_services',
        column: 'id',
        options: {
            column: 'parent_id',
            value: 'not null',
        },
    }),
    __metadata("design:type", salon_service_entity_1.default)
], AppointmentDto.prototype, "service", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AppointmentDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", appointment_status_entity_1.default)
], AppointmentDto.prototype, "status", void 0);
exports.AppointmentDto = AppointmentDto;
class SlotRequestInterface {
}
exports.SlotRequestInterface = SlotRequestInterface;
class SlotUpdateInterface extends SlotRequestInterface {
}
exports.SlotUpdateInterface = SlotUpdateInterface;
//# sourceMappingURL=Appointment.dto.js.map