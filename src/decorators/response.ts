import { applyDecorators, SetMetadata } from '@nestjs/common';

export const Response = (message: string, source?: string[]): any =>
  applyDecorators(
    SetMetadata('message', message.toLocaleLowerCase()),
    SetMetadata('source', source),
  );
