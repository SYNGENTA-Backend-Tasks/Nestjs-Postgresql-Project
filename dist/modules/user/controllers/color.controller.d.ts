import { ColorService } from '../services/color.service';
import { CreateColorDto } from '../dto/create-color.dto';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    createColor(createColorDto: CreateColorDto): Promise<import("../entities/color.entity").Color>;
}
