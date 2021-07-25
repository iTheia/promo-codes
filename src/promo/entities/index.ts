import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromoDocument = Promo & Document;

@Schema()
export class Promo {
  @Prop({ default: new Date(), required: false })
  startDate: Date;

  @Prop({ default: new Date(9999, 12, 30), required: false })
  endDate: Date;

  @Prop()
  total: string | 'unlimited';

  @Prop()
  promo: number;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  validTypes: number[];
}

export const PromoSchema = SchemaFactory.createForClass(Promo);
