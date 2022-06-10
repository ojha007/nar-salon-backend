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
const response_1 = require("../../decorators/response");
const category_service_1 = require("./category.service");
const category_request_dto_1 = require("./dto/category.request.dto");
let CategoryController = class CategoryController {
    constructor(service) {
        this.service = service;
    }
    async index(isActive) {
        return this.service.findAll(isActive);
    }
    async create(payload) {
        return this.service.create(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, response_1.Response)('FETCHED', ['Category']),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, response_1.Response)('CREATED', ['Category']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_request_dto_1.CategoryRequestDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.default])
], CategoryController);
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map