import UsersService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequest, RegisterRequest } from './dto/auth.request';
export default class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: LoginRequest): Promise<{
        user: any;
        access_token: string;
    }>;
    register(payload: RegisterRequest): Promise<{
        user: any;
        access_token: string;
    }>;
    generateToken(user: any): Promise<{
        user: any;
        access_token: string;
    }>;
}
