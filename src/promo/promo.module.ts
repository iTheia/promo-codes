import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PromoSchema } from './entities';
import { PromoController } from './promo.controller';
import { PromoService } from './promo.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('db'),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'promos', schema: PromoSchema }]),
  ],
  controllers: [PromoController],
  providers: [PromoService],
})
export class PromoModule {}
