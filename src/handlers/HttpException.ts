import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  MethodNotAllowedException,
  NotFoundException,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import * as util from 'util';
import { ValidationException } from '../exceptions/validation.exception';
import { Response } from 'express';
import { MESSAGES } from '../constants/messages';
import { TypeORMError } from 'typeorm';

@Catch()
export class HttpExceptionHandler implements ExceptionFilter {
  async catch(exception: any, host: ArgumentsHost): Promise<any> {
    try {
      const response: Response = host.switchToHttp().getResponse();
      const errorObj = {
        status: 500,
        success: false,
        message: 'Something Went Wrong!',
        description: null,
        errors: null,
      };
      console.log(exception.stack);
      if (exception instanceof TypeORMError) {
        errorObj.message = 'Something Went Wrong!';
        errorObj.status = 500;
        errorObj.description = exception.message;
      } else if (exception instanceof UnauthorizedException) {
        errorObj.message = 'Unauthorized';
        errorObj.status = exception.getStatus();
      } else if (exception instanceof ForbiddenException) {
        errorObj.message = 'Forbidden';
        errorObj.status = exception.getStatus();
      } else if (exception instanceof NotFoundException) {
        errorObj.message = 'Route Not Found';
        errorObj.status = exception.getStatus();
      } else if (exception instanceof BadRequestException) {
        errorObj.message = 'Bad Request';
        errorObj.description = exception.message;
        errorObj.status = exception.getStatus();
      } else if (exception instanceof ValidationException) {
        errorObj.message = exception.getResponse().toString();
        errorObj.errors = exception.getErrors();
        errorObj.status = exception.getStatus();
      } else if (exception instanceof RequestTimeoutException) {
        errorObj.message = 'Bad Request';
        errorObj.status = exception.getStatus();
      } else if (exception instanceof MethodNotAllowedException) {
        errorObj.message = 'Bad Request';
        errorObj.status = exception.getStatus();
      } else {
        // const message = await this.cacheManager.get(exception.message);
        const message = MESSAGES.ERROR[exception.message];
        const source =
          message && exception.getSource() ? exception.getSource() : '';
        errorObj.message = message
          ? util.format(message, ...(Array.isArray(source) ? source : [source]))
          : exception.message;
        if (typeof exception.getDescription != 'undefined') {
          errorObj.description = exception.getDescription();
        } else {
          errorObj.description = '';
        }
        errorObj.status = exception.status || errorObj.status;
        console.log(exception);
      }
      if (!response.headersSent)
        response.status(errorObj.status).json(errorObj).send();
    } catch (ex) {
      console.log(ex);
    }
  }
}
