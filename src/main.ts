import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);  
  const port = configService.get<number>('PORT', 3000);  
  await app.listen(port);  // Démarre le serveur sur le port récupéré

  console.log(`App is running on port: ${port}`);
}

bootstrap();
