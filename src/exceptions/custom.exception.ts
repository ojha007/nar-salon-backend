import { HttpException } from '@nestjs/common';

export default class CustomException extends HttpException {
  source: string;
  description: string;
  constructor(
    code: number,
    message: string,
    source?: string,
    description?: string,
    stack?: string,
  ) {
    super('Cannot Process Request Body', code ?? 422);
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
