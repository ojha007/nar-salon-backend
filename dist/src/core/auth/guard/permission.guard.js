"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const PermissionGuard = (permissions) => {
    class PermissionGuard {
        constructor(reflector) {
            this.reflector = reflector;
        }
        async canActivate(context) {
            const request = context.switchToHttp().getRequest();
            const user = request.user;
            console.log(user);
            return false;
        }
    }
    return (0, common_1.mixin)(PermissionGuard);
};
exports.default = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map