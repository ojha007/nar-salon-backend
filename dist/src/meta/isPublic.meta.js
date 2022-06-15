"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAuth = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'NoAuth';
const NoAuth = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.NoAuth = NoAuth;
//# sourceMappingURL=isPublic.meta.js.map