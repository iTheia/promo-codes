export interface createDto {
  startDate: Date;
  endDate: Date;
  total: string | 'unlimited';
  promo: number;
  code: string;
  validTypes: number[];
}

export interface updateDto {
  startDate: Date;
  endDate: Date;
  total: string | 'unlimited';
  promo: number;
  code: string;
  validTypes: number[];
}

export interface validateDto {
  code: string;
  type: number;
}
