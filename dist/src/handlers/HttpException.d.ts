import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class HttpExceptionHandler implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Promise<any>;
}
