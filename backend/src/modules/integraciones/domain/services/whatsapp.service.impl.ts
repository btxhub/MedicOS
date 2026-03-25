import { Injectable } from '@nestjs/common';
import { WhatsappService } from '../../domain/services/whatsapp.service';

@Injectable()
export class WhatsappServiceImpl implements WhatsappService {
  async sendMessage(to: string, content: string): Promise<void> {
    // Implementación de envío de WhatsApp (simulada o real)
  }
}