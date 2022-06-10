import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { IsExists } from 'src/decorators/isExists';

export class CategoryRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  name: string;

  @IsOptional()
  @IsNumber()
  @IsExists({
    table: 'categories',
    column: 'id',
  })
  parentId: number;
}
