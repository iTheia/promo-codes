import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StandardError } from 'src/filters';
import { createDto, updateDto, validateDto } from './dto';
import { PromoDocument } from './entities';

@Injectable()
export class PromoService {
  constructor(
    @InjectModel('promos') private promoModel: Model<PromoDocument>,
  ) {}

  async getCodes(page: number = 0, limit: number = 10) {
    try {
      return {
        data: await this.promoModel
          .find()
          .limit(limit)
          .skip(page * limit),
        next: { page: page + 1, limit },
        prev: page - 1 >= 0 ? { page: page - 1, limit } : null,
      };
    } catch (error) {
      throw new StandardError('Error al cargar los codigos');
    }
  }

  async getCode(code: string) {
    try {
      const promo = await this.promoModel.findOne({ code });
      if (!promo) {
        throw new Error('Sin codigo');
      }
      return promo;
    } catch (error) {
      throw new StandardError(
        error.message ? error.message : JSON.stringify(error),
      );
    }
  }

  async createCode(dto: createDto) {
    try {
      return await new this.promoModel(dto).save();
    } catch (error) {
      throw new StandardError('Error al cargar el codigo');
    }
  }

  async deleteCode(code: string) {
    try {
      await this.promoModel.deleteOne({ code });
      return { okey: true };
    } catch (error) {
      throw new StandardError('Error al borrar el codigo');
    }
  }

  async updateCode(code: string, dto: updateDto) {
    try {
      await this.promoModel.updateOne({ code }, dto);
      return { okey: true };
    } catch (error) {
      throw new StandardError('Error al actualizar el codigo');
    }
  }
  async validateCode(dto: validateDto) {
    try {
      const promo = await this.promoModel.findOne({ code: dto.code });
      if (promo.total !== 'unlimited' && parseInt(promo.total) <= 0) {
        throw new Error('No quedan codigos validos');
      }
      if (!promo.validTypes.includes(dto.type)) {
        throw new Error('Tipo de tarjeta no valido');
      }
      const currentDate = new Date();
      if (currentDate.getTime() < promo.startDate.getTime()) {
        throw new Error('El codigo no esta en el tiempo correcto');
      }
      if (currentDate.getTime() > promo.endDate.getTime()) {
        throw new Error('El codigo no esta en el tiempo correcto');
      }
      await promo.update({
        total:
          promo.total !== 'unlimited'
            ? (parseInt(promo.total) - 1).toString()
            : 'unlimited',
      });
      return {
        promo: promo.promo,
        code: promo.code,
      };
    } catch (error) {
      throw new StandardError(
        error.message ? error.message : JSON.stringify(error),
      );
    }
  }
}
