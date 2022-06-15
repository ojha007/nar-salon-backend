import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'NoAuth';
export const NoAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
