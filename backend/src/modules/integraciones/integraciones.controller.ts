import { Controller, Post, Body } from '@nestjs/common';
import { SendEmailUseCase } from './application/use-cases/send-email.usecase';
import { SendWhatsappUseCase } from './application/use-cases/send-whatsapp.usecase';
import { EmailServiceImpl } from './infrastructure/services/email.service.impl';
import { WhatsappServiceImpl } from './infrastructure/services/whatsapp.service.impl';

@Controller('integraciones')
export class IntegracionesController {
  private sendEmailUseCase = new SendEmailUseCase(new EmailServiceImpl());
  private sendWhatsappUseCase = new SendWhatsappUseCase(new WhatsappServiceImpl());

  @Post('email')
  async sendEmail(
    @Body() body: { to: string; subject: string; content: string }
  ): Promise<void> {
    await this.sendEmailUseCase.execute(body.to, body.subject, body.content);
  }

  @Post('whatsapp')
  async sendWhatsapp(
    @Body() body: { to: string; content: string }
  ): Promise<void> {
    await this.sendWhatsappUseCase.execute(body.to, body.content);
  }
}