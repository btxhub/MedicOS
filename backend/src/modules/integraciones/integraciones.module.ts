import { Module } from '@nestjs/common';
import { IntegracionesController } from './integraciones.controller';
import { SendEmailUseCase } from './application/use-cases/send-email.usecase';
import { SendWhatsappUseCase } from './application/use-cases/send-whatsapp.usecase';
import { SistemaModule } from '../sistema/sistema.module';
import { EmailService } from './domain/services/email.service';
import { WhatsappService } from './domain/services/whatsapp.service';

@Module({
  imports: [SistemaModule],
  controllers: [IntegracionesController],
  providers: [
    SendEmailUseCase,
    SendWhatsappUseCase,
    {
      provide: 'EmailService',
      useClass: EmailService,
    },
    {
      provide: 'WhatsappService',
      useClass: WhatsappService,
    },
  ],
})
export class IntegracionesModule {}