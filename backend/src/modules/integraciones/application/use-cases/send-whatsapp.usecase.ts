import { Injectable, Inject } from '@nestjs/common';
import { WhatsappService } from '../../domain/services/whatsapp.service';

@Injectable()
export class SendWhatsappUseCase {
  constructor(@Inject('WhatsappService') private readonly whatsappService: WhatsappService) {}

  async execute(to: string, content: string): Promise<void> {
    await this.whatsappService.sendMessage(to, content);
  }
}