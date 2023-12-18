import { Injectable, Logger } from '@nestjs/common';
import * as twilio from 'twilio';
import * as process from 'process';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  async sendMessage(recipients: string[]): Promise<void> {
    this.logger.log('Sending SMS Notification');

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );

    for (const recipient of recipients) {
      this.logger.log(`Sending to: ${recipient}`);
      await client.messages.create({
        body: 'Poppy is at the backdoor',
        from: process.env.TWILIO_PHONE_NUMBER,
        to: recipient,
      });
    }
  }
}
