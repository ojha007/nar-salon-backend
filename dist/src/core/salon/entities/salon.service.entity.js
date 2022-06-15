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
var SalonServiceEntitiy_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let SalonServiceEntitiy = SalonServiceEntitiy_1 = class SalonServiceEntitiy extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'integer' }),
    __metadata("design:type", Number)
], SalonServiceEntitiy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 25 }),
    __metadata("design:type", String)
], SalonServiceEntitiy.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'text', nullable: true }),
    __metadata("design:type", String)
], SalonServiceEntitiy.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SalonServiceEntitiy_1, (service) => service.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id', referencedColumnName: 'id' }),
    __metadata("design:type", SalonServiceEntitiy)
], SalonServiceEntitiy.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SalonServiceEntitiy_1, (service) => service.parent),
    __metadata("design:type", Array)
], SalonServiceEntitiy.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_active',
        type: 'boolean',
        default: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], SalonServiceEntitiy.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        select: false,
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", String)
], SalonServiceEntitiy.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        select: false,
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", String)
], SalonServiceEntitiy.prototype, "updateAt", void 0);
SalonServiceEntitiy = SalonServiceEntitiy_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'salon_services' })
], SalonServiceEntitiy);
exports.default = SalonServiceEntitiy;
//# sourceMappingURL=salon.service.entity.js.map