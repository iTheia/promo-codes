import { IConf } from './types';

const { env } = process;

export const dev: IConf = {
  db: {
    uri: env.DEV_MONGO || 'mongodb://localhost',
    dbName: 'promos',
  },
  port: parseInt(env.DEV_PORT) || 3000,
};
