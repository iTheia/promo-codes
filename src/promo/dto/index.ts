import { ApiProperty } from '@nestjs/swagger';

export class createDto {
  @ApiProperty({
    type: Date,
    description: 'Fecha de inicio de la promo',
    example: '"December 17, 1995 03:24:00',
  })
  startDate: Date;
  @ApiProperty({
    type: Date,
    description: 'Fecha final de la promo',
    example: '"December 17, 1995 03:24:00',
  })
  endDate: Date;
  @ApiProperty({
    type: String,
    description: 'Total de promos disponibles',
    example: '1000 | unlimited',
  })
  total: string | 'unlimited';
  @ApiProperty({
    type: Number,
    description: 'Porcentaje a descontar',
    example: 0.5,
  })
  promo: number;
  @ApiProperty({
    type: String,
    description: 'Identificador unico de la promocion',
    example: 'yo-soy-dgo',
  })
  code: string;
  @ApiProperty({
    type: Array,
    description: "Id's validos",
    example: [1, 3, 4, 6],
  })
  validTypes: number[];
}

export class updateDto {
  @ApiProperty({
    type: Date,
    description: 'Fecha de inicio de la promo',
    example: '"December 17, 1995 03:24:00',
  })
  startDate: Date;
  @ApiProperty({
    type: Date,
    description: 'Fecha final de la promo',
    example: '"December 17, 1995 03:24:00',
  })
  endDate: Date;
  @ApiProperty({
    type: String,
    description: 'Total de promos disponibles',
    example: '1000 | unlimited',
  })
  total: string | 'unlimited';
  @ApiProperty({
    type: Number,
    description: 'Porcentaje a descontar',
    example: 0.5,
  })
  promo: number;
  @ApiProperty({
    type: String,
    description: 'Identificador unico de la promocion',
    example: 'yo-soy-dgo',
  })
  code: string;
  @ApiProperty({
    type: Array,
    description: "Id's validos",
    example: [1, 3, 4, 6],
  })
  validTypes: number[];
}

export class validateDto {
  @ApiProperty({
    type: String,
    description: 'Identificador unico de la promocion',
    example: 'yo-soy-dgo',
  })
  code: string;
  @ApiProperty({
    type: String,
    description: 'Id de la categoria',
    example: 1,
  })
  type: number;
}
