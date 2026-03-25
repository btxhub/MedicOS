import { EmailService } from '../../domain/services/email.service';

export class EmailServiceImpl implements EmailService {
  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    console.log('EMAIL', { to, subject, content });
  }
}