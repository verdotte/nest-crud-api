import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';
import { AppModule } from './app.module';

const { PORT = 3000, API_VERSION = 'v1' } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(API_VERSION);

  const options = new DocumentBuilder()
    .setTitle(`CRUD API Backend`)
    .setDescription(`The Nest CRUD API Backend is an API where users can create, read, update & delete post`)
    .setVersion('1.0')
    .addTag('CRUD-API')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${API_VERSION}/doc-api`, app, document);
  await app.listen(PORT);
  Logger.log(`Server running on http://localhost:${PORT}`);
}
bootstrap();
