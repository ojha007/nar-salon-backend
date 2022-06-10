import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'util';
import { Reflector } from '@nestjs/core';
import { MESSAGES } from '../constants/messages';

export interface Response<T> {
  data: T;
}

@Injectable()
class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private reflector: Reflector) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<Response<T>>> {
    const mssg = this.reflector.get<string>('message', context.getHandler());
    const source = this.reflector.get<string>('source', context.getHandler());
    const template = mssg && MESSAGES.SUCCESS[mssg.toUpperCase()];
    return next.handle().pipe(
      map((data) => {
        let message: string;
        if (source && template) message = util.format(template, ...source);
        else message = 'Operation executed successfully.';
        return {
          status: 200,
          success: true,
          message,
          data,
          servedBy: process.env.SERVICE_NAME || 'nari-salon',
        };
      }),
    );
  }
}
export default TransformInterceptor;
