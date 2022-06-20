import { CanActivate, Type } from '@nestjs/common';
declare const PermissionGuard: (permissions: string | string[]) => Type<CanActivate>;
export default PermissionGuard;
