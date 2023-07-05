import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createTable(userData: CreateUserDto): Promise<CreateUserDto & User>;
    getAllUser(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
