import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateColorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  created_by: string;

  @IsNotEmpty()
  @IsNumber()
  updated_by: string;


}