import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  app.use(cookieParser());

  app.enableCors({
    origin: '*',
  });

  await app.listen(8001);
}
bootstrap();
