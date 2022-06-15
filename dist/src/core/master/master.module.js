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
const week_days_controller_1 = require("./controllers/week-days.controller");
const working_hours_controller_1 = require("./controllers/working-hours.controller");
const week_days_entity_1 = require("./entities/week-days.entity");
const working_hours_entity_1 = require("./entities/working-hours.entity");
const week_days_service_1 = require("./services/week-days.service");
const working_hours_service_1 = require("./services/working-hours.service");
let MasterModule = class MasterModule {
};
MasterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([week_days_entity_1.default, working_hours_entity_1.default])],
        controllers: [working_hours_controller_1.default, week_days_controller_1.default],
        providers: [working_hours_service_1.default, week_days_service_1.default],
    })
], MasterModule);
exports.default = MasterModule;
//# sourceMappingURL=master.module.js.map