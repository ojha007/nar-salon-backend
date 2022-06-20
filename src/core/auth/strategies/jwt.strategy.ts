import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../../../constants/config';
import { getManager } from 'typeorm';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      session: true,
    });
  }

  async validate(payload: any) {
    let connection = getManager();
    let user = await connection.query(
      `
      select name,
      email,
      u.id as "userId",
      json_build_object('id', r.id, 'name', r.name) as roles
     from users u
         join roles r on u.role_id = r.id
       where u.id= $1 

     `,
      [payload.id],
    );

    return user;
  }
}
