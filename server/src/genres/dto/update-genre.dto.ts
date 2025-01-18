import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}
