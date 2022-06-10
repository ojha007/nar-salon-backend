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
const operators_1 = require("rxjs/operators");
const util = require("util");
const core_1 = require("@nestjs/core");
const messages_1 = require("../constants/messages");
let TransformInterceptor = class TransformInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async intercept(context, next) {
        const mssg = this.reflector.get('message', context.getHandler());
        const source = this.reflector.get('source', context.getHandler());
        const template = mssg && messages_1.MESSAGES.SUCCESS[mssg.toUpperCase()];
        return next.handle().pipe((0, operators_1.map)((data) => {
            let message;
            if (source && template)
                message = util.format(template, ...source);
            else
                message = 'Operation executed successfully.';
            return {
                status: 200,
                success: true,
                message,
                data,
                servedBy: process.env.SERVICE_NAME || 'nari-salon',
            };
        }));
    }
};
TransformInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], TransformInterceptor);
exports.default = TransformInterceptor;
//# sourceMappingURL=ResponseInterceptor.js.map