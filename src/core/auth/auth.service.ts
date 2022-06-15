import { Injectable } from '@nestjs/common';
import UsersService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequest, RegisterRequest } from './dto/auth.request';
import { jwtConstants } from 'src/constants/config';
import CustomException from 'src/exceptions/custom.exception';
import UserEntity from '../user/user.entity';

@Injectable()
export default class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({ email });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginRequest) {
    let authUser = await this.validateUser(user.email, user.password);
    if (!authUser) throw new CustomException(422, 'INVALID_CRED');
    delete authUser.password;
    return this.generateToken(authUser);
  }

  async register(payload: RegisterRequest) {
    const emailExists = await this.userService.count({ email: payload.email });
    if (emailExists) throw new CustomException(422, 'EMAIL_EXISTS');
    let user: UserEntity = await this.userService.create(payload);
    delete user.password;
    return this.generateToken(user);
  }

  async generateToken(user: any) {
    return {
      user,
      access_token: this.jwtService.sign({ ...user }, jwtConstants),
    };
  }
}
