import * as dotenv from 'dotenv';

dotenv.config();

console.log('ENV loaded:', {
  CLOUD_NAME: process.env.CLOUD_NAME ? 'OK' : 'MISSING',
  CLOUD_API_KEY: process.env.CLOUD_API_KEY ? 'OK' : 'MISSING', 
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET ? 'OK' : 'MISSING'
});

export const config = {
  CLOUD_NAME: process.env.CLOUD_NAME || '',
  CLOUD_API_KEY: process.env.CLOUD_API_KEY || '',
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET || '',
};