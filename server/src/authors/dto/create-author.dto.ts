import { IsArray, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsPositive({ each: true })
  books: number[];
}
