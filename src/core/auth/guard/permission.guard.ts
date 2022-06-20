import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import RoleGuard from './role.guard';

const PermissionGuard = (permissions: string | string[]): Type<CanActivate> => {
  class PermissionGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}
    async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      console.log(user);
      return false;
      // return user?.permissions.includes(permissions);
    }
  }
  return mixin(PermissionGuard);
};
export default PermissionGuard;
