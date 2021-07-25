import { IConf } from './types';

const { env } = process;

export const prod: IConf = {
  db: {
    uri: env.MONGO || '',
    dbName: 'promos',
  },
  port: parseInt(env.PORT) || 3000,
};
