import { Repository } from 'typeorm';
import { Color } from '../entities/color.entity';
import { CreateColorDto } from '../dto/create-color.dto';
export declare class ColorService {
    private readonly colorRepository;
    constructor(colorRepository: Repository<Color>);
    createColor(createColorDto: CreateColorDto): Promise<Color>;
}
