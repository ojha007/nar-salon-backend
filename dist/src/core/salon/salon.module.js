"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const salon_service_controller_1 = require("./controllers/salon.service.controller");
const salon_service_entity_1 = require("./entities/salon.service.entity");
const salon_service_1 = require("./services/salon.service");
let SalonModule = class SalonModule {
};
SalonModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([salon_service_entity_1.default])],
        controllers: [salon_service_controller_1.default],
        providers: [salon_service_1.default],
    })
], SalonModule);
exports.default = SalonModule;
//# sourceMappingURL=salon.module.js.map