import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

//! make each variable in the .env file to be accessable in process object
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // await app.listen(3000);

  const PORT = process.env.PORT || 3000;

  console.log(`server is running on port ${PORT}`)

  await app.listen(PORT) ;
}
bootstrap();
