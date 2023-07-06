import { Controller, Post, Body } from '@nestjs/common';
import { ColorService } from '../services/color.service';
import { CreateColorDto } from '../dto/create-color.dto';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  createColor(@Body() createColorDto: CreateColorDto) {
    return this.colorService.createColor(createColorDto);
  }
}
