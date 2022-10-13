import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const USE_MOCK_DATA = Boolean(process.env.USE_MOCK_API);
if (USE_MOCK_DATA) {
  // eslint-disable-next-line no-console
  console.log('Mock Server Worker listening');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  await app.listen(3001);
}

bootstrap();
