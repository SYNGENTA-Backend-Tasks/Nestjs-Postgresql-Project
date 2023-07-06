import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
}
