import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class Address extends BaseEntity {
    addressId: number;
    country: string;
    state: string;
    city: string;
    pincode: number;
    users: User;
}
