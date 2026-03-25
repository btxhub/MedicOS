import { EmailService } from '../../domain/services/email.service';

export class SendEmailUseCase {
  constructor(private readonly emailService: EmailService) {}

  async execute(to: string, subject: string, content: string): Promise<void> {
    await this.emailService.sendEmail(to, subject, content);
  }
}