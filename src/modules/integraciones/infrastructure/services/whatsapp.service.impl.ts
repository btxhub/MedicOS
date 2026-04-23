import { WhatsappService } from '../../domain/services/whatsapp.service';

export class WhatsappServiceImpl implements WhatsappService {
  async sendMessage(to: string, content: string): Promise<void> {
    console.log('WHATSAPP', { to, content });
  }
}