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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const appointment_status_entity_1 = require("./appointment.status.entity");
let AppointmentEntity = class AppointmentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' }),
    __metadata("design:type", Number)
], AppointmentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], AppointmentEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'slot_from', type: 'time', nullable: false }),
    __metadata("design:type", String)
], AppointmentEntity.prototype, "slotFrom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'slot_to', type: 'time', nullable: false }),
    __metadata("design:type", String)
], AppointmentEntity.prototype, "slotTo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.default)
], AppointmentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_status_entity_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", appointment_status_entity_1.default)
], AppointmentEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", user_entity_1.default)
], AppointmentEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", user_entity_1.default)
], AppointmentEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        select: false,
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", String)
], AppointmentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        select: false,
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", String)
], AppointmentEntity.prototype, "updatedAt", void 0);
AppointmentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'appointments' })
], AppointmentEntity);
exports.default = AppointmentEntity;
//# sourceMappingURL=appointment.entity.js.map