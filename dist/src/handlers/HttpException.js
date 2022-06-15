"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionHandler = void 0;
const common_1 = require("@nestjs/common");
const util = require("util");
const validation_exception_1 = require("../exceptions/validation.exception");
const messages_1 = require("../constants/messages");
const typeorm_1 = require("typeorm");
let HttpExceptionHandler = class HttpExceptionHandler {
    async catch(exception, host) {
        try {
            const response = host.switchToHttp().getResponse();
            const errorObj = {
                status: 500,
                success: false,
                message: 'Something Went Wrong!',
                description: null,
                errors: null,
            };
            console.log(exception.stack);
            if (exception instanceof typeorm_1.TypeORMError) {
                errorObj.message = 'Something Went Wrong!';
                errorObj.status = 500;
                errorObj.description = exception.message;
            }
            else if (exception instanceof common_1.UnauthorizedException) {
                errorObj.message = 'Unauthorized';
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof common_1.ForbiddenException) {
                errorObj.message = 'Forbidden';
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof common_1.NotFoundException) {
                errorObj.message = 'Route Not Found';
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof common_1.BadRequestException) {
                errorObj.message = 'Bad Request';
                errorObj.description = exception.message;
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof validation_exception_1.ValidationException) {
                errorObj.message = exception.getResponse().toString();
                errorObj.errors = exception.getErrors();
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof common_1.RequestTimeoutException) {
                errorObj.message = 'Bad Request';
                errorObj.status = exception.getStatus();
            }
            else if (exception instanceof common_1.MethodNotAllowedException) {
                errorObj.message = 'Bad Request';
                errorObj.status = exception.getStatus();
            }
            else {
                const message = messages_1.MESSAGES.ERROR[exception.message];
                const source = message && exception.getSource() ? exception.getSource() : '';
                errorObj.message = message
                    ? util.format(message, ...(Array.isArray(source) ? source : [source]))
                    : exception.message;
                if (typeof exception.getDescription != 'undefined') {
                    errorObj.description = exception.getDescription();
                }
                else {
                    errorObj.description = '';
                }
                errorObj.status = exception.status || errorObj.status;
                console.log(exception);
            }
            if (!response.headersSent)
                response.status(errorObj.status).json(errorObj).send();
        }
        catch (ex) {
            console.log(ex);
        }
    }
};
HttpExceptionHandler = __decorate([
    (0, common_1.Catch)()
], HttpExceptionHandler);
exports.HttpExceptionHandler = HttpExceptionHandler;
//# sourceMappingURL=HttpException.js.map