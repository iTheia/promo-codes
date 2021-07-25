import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      load: [config],
      isGlobal: true,
    }),
    PromoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
