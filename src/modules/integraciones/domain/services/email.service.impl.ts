import { Injectable } from '@nestjs/common';
import { EmailService } from '../../domain/services/email.service';

@Injectable()
export class EmailServiceImpl implements EmailService {
  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    // Implementación de envío de email (simulada o real)
  }
}