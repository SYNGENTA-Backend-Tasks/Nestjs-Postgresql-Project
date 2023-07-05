import { BaseEntity } from 'typeorm';
import { Address } from './address.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    isActive: boolean;
    address: Address[];
}
