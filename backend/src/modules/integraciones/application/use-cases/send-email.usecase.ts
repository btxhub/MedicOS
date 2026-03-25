import { Injectable, Inject } from '@nestjs/common';
import { EmailService } from '../../domain/services/email.service';

@Injectable()
export class SendEmailUseCase {
  constructor(@Inject('EmailService') private readonly emailService: EmailService) {}

  async execute(to: string, subject: string, content: string): Promise<void> {
    await this.emailService.sendEmail(to, subject, content);
  }
}