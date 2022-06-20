import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/meta/isPublic.meta';
import { AuthGuard } from '@nestjs/passport';
import CustomException from 'src/exceptions/custom.exception';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    const request = context.switchToHttp().getRequest();
    console.log(request);
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    if (info?.name === 'TokenExpiredError')
      throw new CustomException(401, 'TOKEN_EXPIRED');

    if (info?.name === 'JsonWebTokenError')
      throw new CustomException(401, 'INVALID_TOKEN');

    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
