import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  addressId: number;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  pincode: number;

}
