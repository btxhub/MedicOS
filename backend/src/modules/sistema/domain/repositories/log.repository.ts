import type { Log } from '../entities/log.entity';

export interface LogRepository {
  save(log: Log): Promise<Log>;
}