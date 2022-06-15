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
const week_days_entity_1 = require("./week-days.entity");
let WorkingHoursEntity = class WorkingHoursEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'integer' }),
    __metadata("design:type", Number)
], WorkingHoursEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_hour', type: 'time', nullable: true }),
    __metadata("design:type", String)
], WorkingHoursEntity.prototype, "startHour", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_hour', type: 'time', nullable: true }),
    __metadata("design:type", String)
], WorkingHoursEntity.prototype, "endHour", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => week_days_entity_1.default, (day) => day.id),
    (0, typeorm_1.JoinColumn)({ name: 'day_id' }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", week_days_entity_1.default)
], WorkingHoursEntity.prototype, "weekDay", void 0);
WorkingHoursEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'master_working_hours' })
], WorkingHoursEntity);
exports.default = WorkingHoursEntity;
//# sourceMappingURL=working-hours.entity.js.map