import { Injectable, Inject } from '@nestjs/common';
import { EmailService } from '../../domain/services/email.service';
import { CreateLogUseCase } from '../../../sistema/application/use-cases/create-log.usecase';

@Injectable()
export class SendEmailUseCase {
  constructor(
    @Inject('EmailService') private readonly emailService: EmailService,
    private readonly createLogUseCase: CreateLogUseCase
  ) {}

  async execute(to: string, subject: string, content: string): Promise<void> {
    await this.emailService.sendEmail(to, subject, content);

    await this.createLogUseCase.execute({
      action: 'SEND_EMAIL',
      detail: `Email enviado a ${to}`,
    } as any);
  }
}