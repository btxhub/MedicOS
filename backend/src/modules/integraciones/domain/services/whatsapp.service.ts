export class WhatsappService {

  async sendMessage(to: string, message: string): Promise<void> {
    console.log('WHATSAPP', { to, message });
  }

}