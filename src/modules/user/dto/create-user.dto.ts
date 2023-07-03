import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  name: string;

}
