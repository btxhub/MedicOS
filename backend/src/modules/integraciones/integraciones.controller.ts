// ARCHIVO: /home/btx/MedicOS/backend/src/modules/integraciones/integraciones.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SendEmailUseCase } from './application/use-cases/send-email.usecase';
import { SendWhatsappUseCase } from './application/use-cases/send-whatsapp.usecase';

@Controller('integraciones')
export class IntegracionesController {
  constructor(
    private readonly sendEmailUseCase: SendEmailUseCase,
    private readonly sendWhatsappUseCase: SendWhatsappUseCase,
  ) {}

  @Post('email')
  async sendEmail(@Body() body: { to: string; subject: string; body: string }) {
    return this.sendEmailUseCase.execute(body.to, body.subject, body.body);
  }

  @Post('whatsapp')
  async sendWhatsapp(@Body() body: { to: string; message: string }) {
    return this.sendWhatsappUseCase.execute(body.to, body.message);
  }
}