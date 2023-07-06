import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressController } from './controllers/address.controller';
import { AddressService } from './services/address.service';
import { Address } from './entities/address.entity';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.services';
import { Category } from './entities/category.entity';
import { Color } from './entities/color.entity';
import { CategoryController } from './controllers/category.controller';
import { ColorController } from './controllers/color.controller';
import { CategoryService } from './services/category.service';
import { ColorService } from './services/color.service';
import { OrderController } from './controllers/order.controller';
import { CustomerController } from './controllers/customer.controller';
import { PaymentController } from './controllers/payment.controller';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { Payment } from './entities/payment.entity';
import { OrderService } from './services/order.service';
import { CustomerService } from './services/customer.service';
import { PaymentService } from './services/payment.service';

@Module({
  controllers: [
    UserController,
    AddressController,
    ProductController,
    CategoryController,
    ColorController,
    OrderController,
    CustomerController,
    PaymentController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      User,
      Address,
      Product,
      Category,
      Color,
      Order,
      Payment,
      Customer,
    ]),
  ],
  providers: [
    UserService,
    AddressService,
    ProductService,
    CategoryService,
    ColorService,
    OrderService,
    CustomerService,
    PaymentService
  ],
  exports: [
    UserService,
    AddressService,
    ProductService,
    CategoryService,
    ColorService,
    OrderService,
    CustomerService,
    PaymentService
  ],
})
export class UserModule {}
