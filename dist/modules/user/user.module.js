"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const address_controller_1 = require("./controllers/address.controller");
const address_service_1 = require("./services/address.service");
const address_entity_1 = require("./entities/address.entity");
const product_entity_1 = require("./entities/product.entity");
const product_controller_1 = require("./controllers/product.controller");
const product_services_1 = require("./services/product.services");
const category_entity_1 = require("./entities/category.entity");
const color_entity_1 = require("./entities/color.entity");
const category_controller_1 = require("./controllers/category.controller");
const color_controller_1 = require("./controllers/color.controller");
const category_service_1 = require("./services/category.service");
const color_service_1 = require("./services/color.service");
const order_controller_1 = require("./controllers/order.controller");
const customer_controller_1 = require("./controllers/customer.controller");
const payment_controller_1 = require("./controllers/payment.controller");
const customer_entity_1 = require("./entities/customer.entity");
const order_entity_1 = require("./entities/order.entity");
const payment_entity_1 = require("./entities/payment.entity");
const order_service_1 = require("./services/order.service");
const customer_service_1 = require("./services/customer.service");
const payment_service_1 = require("./services/payment.service");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            user_controller_1.UserController,
            address_controller_1.AddressController,
            product_controller_1.ProductController,
            category_controller_1.CategoryController,
            color_controller_1.ColorController,
            order_controller_1.OrderController,
            customer_controller_1.CustomerController,
            payment_controller_1.PaymentController,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                address_entity_1.Address,
                product_entity_1.Product,
                category_entity_1.Category,
                color_entity_1.Color,
                order_entity_1.Order,
                payment_entity_1.Payment,
                customer_entity_1.Customer,
            ]),
        ],
        providers: [
            user_service_1.UserService,
            address_service_1.AddressService,
            product_services_1.ProductService,
            category_service_1.CategoryService,
            color_service_1.ColorService,
            order_service_1.OrderService,
            customer_service_1.CustomerService,
            payment_service_1.PaymentService
        ],
        exports: [
            user_service_1.UserService,
            address_service_1.AddressService,
            product_services_1.ProductService,
            category_service_1.CategoryService,
            color_service_1.ColorService,
            order_service_1.OrderService,
            customer_service_1.CustomerService,
            payment_service_1.PaymentService
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map