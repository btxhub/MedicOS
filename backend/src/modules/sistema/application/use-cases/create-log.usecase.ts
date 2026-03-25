import type { Log } from '../../domain/entities/log.entity';
import type { LogRepository } from '../../domain/repositories/log.repository';

export class CreateLogUseCase {
  constructor(private readonly logRepository: LogRepository) {}

  async execute(log: Log): Promise<Log> {
    return this.logRepository.save(log);
  }
}