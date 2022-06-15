import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ShouldMatch } from 'src/decorators/shouldmatch';

export class LoginRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RegisterRequest {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  avatar: string;

  @IsNotEmpty()
  @IsString()
  @ShouldMatch('password')
  confirmPassword: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 10)
  phoneNumber: string;
}
