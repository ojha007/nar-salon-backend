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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../../constants/config");
const custom_exception_1 = require("../../exceptions/custom.exception");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.userService.findOne({ email });
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        let authUser = await this.validateUser(user.email, user.password);
        if (!authUser)
            throw new custom_exception_1.default(422, 'INVALID_CRED');
        delete authUser.password;
        return this.generateToken(authUser);
    }
    async register(payload) {
        const emailExists = await this.userService.count({ email: payload.email });
        if (emailExists)
            throw new custom_exception_1.default(422, 'EMAIL_EXISTS');
        let user = await this.userService.create(payload);
        delete user.password;
        return this.generateToken(user);
    }
    async generateToken(user) {
        return {
            user,
            access_token: this.jwtService.sign(Object.assign({}, user), config_1.jwtConstants),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.default,
        jwt_1.JwtService])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map