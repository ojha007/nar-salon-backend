import AuthService from './auth.service';
import { LoginRequest, RegisterRequest } from './dto/auth.request';
export default class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: LoginRequest): Promise<{
        user: any;
        access_token: string;
    }>;
    register(payload: RegisterRequest): Promise<{
        user: any;
        access_token: string;
    }>;
}
