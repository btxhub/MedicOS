export interface WhatsappService {
  sendMessage(to: string, content: string): Promise<void>;
}