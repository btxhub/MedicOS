import { Module } from '@nestjs/common';
import { IntegracionesController } from './integraciones.controller';
import { EmailServiceImpl } from './infrastructure/services/email.service.impl';
import { WhatsappServiceImpl } from './infrastructure/services/whatsapp.service.impl';
import { SendEmailUseCase } from './application/use-cases/send-email.usecase';
import { SendWhatsappUseCase } from './application/use-cases/send-whatsapp.usecase';

@Module({
  controllers: [IntegracionesController],
  providers: [
    { provide: 'EmailService', useClass: EmailServiceImpl },
    { provide: 'WhatsappService', useClass: WhatsappServiceImpl },
    SendEmailUseCase,
    SendWhatsappUseCase,
  ],
})
export class IntegracionesModule {}