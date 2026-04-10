import { Injectable, Inject } from '@nestjs/common';
import type { Log } from '../../domain/entities/log.entity';
import type { LogRepository } from '../../domain/repositories/log.repository';

@Injectable()
export class CreateLogUseCase {
  constructor(
    @Inject('LogRepository')
    private readonly logRepository: LogRepository
  ) {}

  async execute(log: Log): Promise<Log> {
    return this.logRepository.save(log);
  }
}