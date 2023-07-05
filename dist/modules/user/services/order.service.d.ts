import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order-dto';
import { Customer } from '../entities/customer.entity';
import { Payment } from '../entities/payment.entity';
export declare class OrderService {
    private orderRepository;
    private customerRepository;
    private paymentRepository;
    constructor(orderRepository: Repository<Order>, customerRepository: Repository<Customer>, paymentRepository: Repository<Payment>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
