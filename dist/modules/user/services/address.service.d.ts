import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';
import { Repository } from 'typeorm';
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: Repository<Address>);
    createAddress(address: CreateAddressDto): Promise<Address>;
}
