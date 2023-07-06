import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/create-order-dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<import("../entities/order.entity").Order>;
}
