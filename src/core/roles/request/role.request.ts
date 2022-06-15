import { IsNotEmpty, IsString } from 'class-validator';

export class RoleRequest {
  @IsNotEmpty()
  @IsString()
  name: string;
}
