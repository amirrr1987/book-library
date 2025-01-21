import {
  IsNumber,
  IsPositive,
  IsString,
  Length,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsArray,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  genres: number[];

  @IsOptional()
  @IsString()
  @Length(0, 500)
  description?: string;

  @IsDateString()
  publishedDate: Date;

  @IsBoolean()
  available: boolean;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsPositive({ each: true })
  authors: number[];
}
