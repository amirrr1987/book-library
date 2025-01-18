import { IsString, Length } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @Length(3, 100)
  label: string; // Genre label must be a string between 3 and 100 characters

  @IsString()
  @Length(3, 100)
  value: string; // Genre value must be a string between 3 and 100 characters
}
