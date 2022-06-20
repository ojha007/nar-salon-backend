import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const RoleGuard = (
  roles: string | string[],
  permissions?: string | string[],
): Type<CanActivate> => {
  class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}
    async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      if (!user) return false;
      if (Array.isArray(roles)) {
      } else {
        return roles.toUpperCase() === user.roles.name.toUpperCase();
      }
      return false;
    }
  }
  return mixin(RoleGuard);
};

export default RoleGuard;
