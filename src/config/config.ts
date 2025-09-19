import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Debug paths
const envPath = path.resolve(process.cwd(), '.env');
console.log('🔍 Checking paths:');
console.log('  Current working dir:', process.cwd());
console.log('  Looking for .env at:', envPath);
console.log('  .env exists?', fs.existsSync(envPath));

// Thử load với path cụ thể
const result = dotenv.config({ path: envPath });
console.log('📝 Dotenv result:', result);

// Debug thêm nếu file tồn tại
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  console.log('📄 .env file content preview:');
  console.log(envContent.split('\n').slice(0, 5).join('\n')); // chỉ show 5 dòng đầu
}

// Debug đơn giản thôi
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