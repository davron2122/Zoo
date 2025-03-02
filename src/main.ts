import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

/* 
bootstrap function 

oz ichida nestfactory yaratilib(nestjs core ), create method (appmodeule argument shaklda)

bootstrap execution

Nestjs ingredients:
controller: creating endpoints
modules: adding dependecy 
services: business logic 
guard: authorization 
pipes: validation & transforamtion 


Module decorator:
1. providers  : via dependency of injection (example: service modules)
2. controllers : 
3. export
4:import

*/
