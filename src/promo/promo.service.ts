import { Injectable } from '@nestjs/common';

@Injectable()
export class PromoService {
  getHello(): string {
    return 'Hello World!';
  }
}
