import {
  Injectable,
  Optional,
  ArgumentMetadata,
  PipeTransform,
} from '@nestjs/common';

import * as ClassTransformer from 'class-transformer';
import * as ClassValidator from 'class-validator';
import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface';

import { isNil } from 'lodash';
import { ErrorFormatter } from '../utils/error.formator';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
}

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  protected isTransformEnabled: boolean;
  protected isDetailedOutputDisabled: boolean;
  protected validatorOptions: ValidatorOptions;

  constructor(@Optional() options?: ValidationPipeOptions) {
    options = Object.assign(
      {
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        skipMissingProperties: false,
        forbidUnknownValues: true,
      },
      options || {},
    );
    const { transform, disableErrorMessages, ...validatorOptions } = options;
    this.isTransformEnabled = !!transform;
    this.validatorOptions = validatorOptions;
    this.isDetailedOutputDisabled = disableErrorMessages;
  }

  public async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metadata)) {
      return value;
    }
    const entity = ClassTransformer.plainToClass(
      metatype,
      this.toEmptyIfNil(value),
    );
    const errors = await ClassValidator.validate(entity, this.validatorOptions);
    if (errors.length > 0) {
      ErrorFormatter(errors);
    }
    return this.isTransformEnabled
      ? entity
      : Object.keys(this.validatorOptions).length > 0
      ? ClassTransformer.classToPlain(entity)
      : value;
  }

  private toValidate(metadata: ArgumentMetadata): boolean {
    const { metatype, type } = metadata;
    if (type === 'custom') {
      return false;
    }
    const types = [String, Boolean, Number, Array, Object];
    return !types.some((t) => metatype === t) && !isNil(metatype);
  }

  toEmptyIfNil<T = any, R = any>(value: T): R | {} {
    return isNil(value) ? {} : value;
  }
}

interface Render {
  view: string;
  locals: {
    error: string;
    [key: string]: any;
  };
}
