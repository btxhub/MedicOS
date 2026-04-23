export class EmailService {

  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    console.log('EMAIL', { to, subject, content });
  }

}