import config from '../config/config.json';
const env = process.env.NODE_ENV || 'development';

export const BASE_URI = config[env].BASE_URI;
