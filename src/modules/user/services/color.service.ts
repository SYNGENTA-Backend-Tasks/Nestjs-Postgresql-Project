import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from '../entities/color.entity';
import { CreateColorDto } from '../dto/create-color.dto';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  async createColor(createColorDto: CreateColorDto): Promise<Color> {
    return await this.colorRepository.save(createColorDto);
  }
}
