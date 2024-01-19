import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction, Response, Request } from 'express';

function cacheControlMiddleware(
  _request: Request,
  response: Response,
  next: NextFunction,
) {
  if (!response.get('Cache-Control')) {
    response.set('Cache-Control', 'no-store, must-revalidate');
  }

  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cacheControlMiddleware);

  const config = new DocumentBuilder()
    .setTitle('poker-agile-server')
    .setDescription('Poker Agile Server')
    .setVersion('1.0')
    .addTag('poker')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
