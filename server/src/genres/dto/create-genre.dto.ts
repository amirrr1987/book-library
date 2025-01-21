import {
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @Length(3, 100)
  label: string;

  @IsString()
  @Length(3, 100)
  value: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @IsPositive({ each: true })
  books: number[];
}
// {
//   label: "is Comedy",
//     value: "compedy",
//       books: [1,2,3]
// }