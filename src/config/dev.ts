import { IConf } from './types';

const { env } = process;

export const dev: IConf = {
  db: {
    mongo: env.DEV_MONGO || '',
  },
  port: parseInt(env.DEV_PORT) || 3000,
};
