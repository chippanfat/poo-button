import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('moorland/button')
  async sendSms(): Promise<void> {
    await this.appService.sendMessage([]);
  }
}
