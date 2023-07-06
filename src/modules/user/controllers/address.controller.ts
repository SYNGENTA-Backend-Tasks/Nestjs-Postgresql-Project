import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressService } from '../services/address.service';
import { Address } from '../entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}
  @Post('')
  @UsePipes(ValidationPipe)
  async saveAddress(@Body() address: CreateAddressDto): Promise<Address> {
    return await this.addressService.createAddress(address);
  }
}
