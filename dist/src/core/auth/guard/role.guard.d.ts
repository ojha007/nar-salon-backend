import { CanActivate, Type } from '@nestjs/common';
declare const RoleGuard: (roles: string | string[], permissions?: string | string[]) => Type<CanActivate>;
export default RoleGuard;
