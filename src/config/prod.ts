import { IConf } from './types';

const { env } = process;

export const prod: IConf = {
  db: {
    mongo: env.MONGO || '',
  },
  port: parseInt(env.PORT) || 3000,
};
