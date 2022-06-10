"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
const common_1 = require("@nestjs/common");
const Response = (message, source) => (0, common_1.applyDecorators)((0, common_1.SetMetadata)('message', message.toLocaleLowerCase()), (0, common_1.SetMetadata)('source', source));
exports.Response = Response;
//# sourceMappingURL=response.js.map