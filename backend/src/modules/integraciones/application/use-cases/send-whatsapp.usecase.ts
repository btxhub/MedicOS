import { WhatsappService } from '../../domain/services/whatsapp.service';

export class SendWhatsappUseCase {
  constructor(private readonly whatsappService: WhatsappService) {}

  async execute(to: string, content: string): Promise<void> {
    await this.whatsappService.sendMessage(to, content);
  }
}