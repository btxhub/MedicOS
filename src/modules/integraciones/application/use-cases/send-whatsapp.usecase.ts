import { Injectable, Inject } from '@nestjs/common';
import { WhatsappService } from '../../domain/services/whatsapp.service';
import { CreateLogUseCase } from '../../../sistema/application/use-cases/create-log.usecase';

@Injectable()
export class SendWhatsappUseCase {
  constructor(
    @Inject('WhatsappService') private readonly whatsappService: WhatsappService,
    private readonly createLogUseCase: CreateLogUseCase
  ) {}

  async execute(to: string, message: string): Promise<void> {
    await this.whatsappService.sendMessage(to, message);

    await this.createLogUseCase.execute({
      action: 'SEND_WHATSAPP',
      detail: `Whatsapp enviado a ${to}`,
    } as any);
  }
}