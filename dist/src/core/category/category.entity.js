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
var CategoryEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let CategoryEntity = CategoryEntity_1 = class CategoryEntity extends typeorm_1.BaseEntity {
};
CategoryEntity.MODEL_NAME = 'categories';
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        nullable: false,
        type: 'varchar',
        length: 25,
    }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryEntity_1, (category) => category.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", CategoryEntity)
], CategoryEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CategoryEntity_1, (category) => category.parent),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', default: true, type: 'boolean' }),
    __metadata("design:type", Boolean)
], CategoryEntity.prototype, "isActive", void 0);
CategoryEntity = CategoryEntity_1 = __decorate([
    (0, typeorm_1.Entity)(CategoryEntity_1.MODEL_NAME)
], CategoryEntity);
exports.default = CategoryEntity;
//# sourceMappingURL=category.entity.js.map