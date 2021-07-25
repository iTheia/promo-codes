import { dev } from './dev';
import { prod } from './prod';

const env = process.env.NODE_ENV;

const configs = {
  dev,
  prod,
};

export const config = () => configs[env] || dev;
