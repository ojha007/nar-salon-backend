import { SetMetadata } from '@nestjs/common';

export const hasRole = (...roles: string[]) => SetMetadata('hasRole', roles);
