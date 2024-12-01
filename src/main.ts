import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Ativa a transformação
      whitelist: true, // Remove campos não definidos no DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
