// ARCHIVO: src/modules/integraciones/integraciones.controller.ts

import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../core/security/guards/auth.guard';
import { SendEmailUseCase } from './application/use-cases/send-email.usecase';
import { SendWhatsappUseCase } from './application/use-cases/send-whatsapp.usecase';

@Controller('integraciones')
@UseGuards(AuthGuard)
export class IntegracionesController {
  constructor(
    private readonly sendEmailUseCase: SendEmailUseCase,
    private readonly sendWhatsappUseCase: SendWhatsappUseCase,
  ) {}

  @Post('email')
  async sendEmail(@Body() body: { to: string; subject: string; content: string }) {
    return this.sendEmailUseCase.execute(body.to, body.subject, body.content);
  }

  @Post('whatsapp')
  async sendWhatsapp(@Body() body: { to: string; message: string }) {
    return this.sendWhatsappUseCase.execute(body.to, body.message);
  }
}