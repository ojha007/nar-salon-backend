"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = void 0;
const common_1 = require("@nestjs/common");
const hasRole = (...roles) => (0, common_1.SetMetadata)('hasRole', roles);
exports.hasRole = hasRole;
//# sourceMappingURL=roles.decorator.js.map