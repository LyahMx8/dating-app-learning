import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DatesController } from './dates/dates.controller';

async function bootstrap() {
  const app = await NestFactory.create(DatesController);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
