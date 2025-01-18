import {
  IsNumber,
  IsPositive,
  IsString,
  Length,
  IsOptional,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @Length(3, 50)
  genre: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  description?: string;

  @IsDateString()
  publishedDate: Date;

  @IsBoolean()
  available: boolean;

  @IsString()
  @Length(3, 100)
  author: string;
}
