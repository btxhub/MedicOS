import type { Log } from '../../domain/entities/log.entity';
import type { LogRepository } from '../../domain/repositories/log.repository';

export class LogRepositoryImpl implements LogRepository {

  async save(log: Log): Promise<Log> {
    return log;
  }

}