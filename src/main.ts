import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['asdfdhgfddssdfgdggf'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // Cleaning extra properties from request body for secure reason
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
