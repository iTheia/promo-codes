import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createDto, updateDto, validateDto } from './dto';
import { PromoService } from './promo.service';

@Controller()
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @Get('')
  async getCodes(
    @Param('page') page: string = '0',
    @Param('limit') limit: string = '10',
  ) {
    return await this.promoService.getCodes(parseInt(page), parseInt(limit));
  }
  @Get('/:code')
  async getCode(@Param('code') code: string) {
    return await this.promoService.getCode(code);
  }

  @Post('')
  async createCode(@Body() dto: createDto) {
    return await this.promoService.createCode(dto);
  }

  @Post('/validate')
  async validate(@Body() dto: validateDto) {
    return await this.promoService.validateCode(dto);
  }
  @Delete('/:code')
  async deleteCode(@Param('code') code: string) {
    return await this.promoService.deleteCode(code);
  }
  @Patch('/:code')
  async updateCode(@Param('code') code: string, @Body() dto: updateDto) {
    return await this.promoService.updateCode(code, dto);
  }
}
