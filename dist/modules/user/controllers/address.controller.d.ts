import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressService } from '../services/address.service';
import { Address } from '../entities/address.entity';
export declare class AddressController {
    private addressService;
    constructor(addressService: AddressService);
    saveAddress(address: CreateAddressDto): Promise<Address>;
}
