import { Controller, Get } from '@nestjs/common';
import { PromoService } from './promo.service';

@Controller()
export class PromoController {
  constructor(private readonly appService: PromoService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
