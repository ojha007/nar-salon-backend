"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const RoleGuard = (roles, permissions) => {
    class RoleGuard {
        constructor(reflector) {
            this.reflector = reflector;
        }
        async canActivate(context) {
            const request = context.switchToHttp().getRequest();
            const user = request.user;
            if (!user)
                return false;
            if (Array.isArray(roles)) {
            }
            else {
                return roles.toUpperCase() === user.roles.name.toUpperCase();
            }
            return false;
        }
    }
    return (0, common_1.mixin)(RoleGuard);
};
exports.default = RoleGuard;
//# sourceMappingURL=role.guard.js.map