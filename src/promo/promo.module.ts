import { Module } from '@nestjs/common';
import { PromoController } from './promo.controller';
import { PromoService } from './promo.service';

@Module({
  imports: [],
  controllers: [PromoController],
  providers: [PromoService],
})
export class PromoModule {}
