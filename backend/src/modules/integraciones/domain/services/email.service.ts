export interface EmailService {
  sendEmail(to: string, subject: string, content: string): Promise<void>;
}