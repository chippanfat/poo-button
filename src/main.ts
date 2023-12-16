import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
        url: process.env.MQTT_URL,
      },
    },
  );
  await app.listen();
}
bootstrap();
