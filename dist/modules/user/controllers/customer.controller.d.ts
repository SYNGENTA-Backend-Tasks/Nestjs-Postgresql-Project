import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<import("../entities/customer.entity").Customer>;
}
