"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class CustomException extends common_1.HttpException {
    constructor(code, message, source, description, stack) {
        super('Cannot Process Request Body', code !== null && code !== void 0 ? code : 422);
        this.message = message;
        this.source = source;
        this.description = description;
        this.stack = stack;
    }
    getSource() {
        return this.source;
    }
    getStack() {
        return this.stack;
    }
    getDescription() {
        return this.description;
    }
    getErrors() {
        return [];
    }
}
exports.default = CustomException;
//# sourceMappingURL=custom.exception.js.map