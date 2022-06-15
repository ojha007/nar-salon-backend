import { HttpException } from '@nestjs/common';
export default class CustomException extends HttpException {
    source: string;
    description: string;
    constructor(code: number, message: string, source?: string, description?: string, stack?: string);
    getSource(): string;
    getStack(): string;
    getDescription(): string;
    getErrors(): any[];
}
