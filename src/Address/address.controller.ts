import { Controller, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Body() data: Partial<Address>): Promise<Address> {
    return this.addressService.createAddress(data);
  }
}
