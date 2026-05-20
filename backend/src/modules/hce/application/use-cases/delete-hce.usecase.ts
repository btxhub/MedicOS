// ARCHIVO: src/modules/hce/application/use-cases/delete-hce.usecase.ts

import { Injectable, Inject } from '@nestjs/common';
import { HceRepository } from '../../domain/repositories/hce.repository';

@Injectable()
export class DeleteHceUseCase {
  constructor(
    @Inject('HceRepository')
    private readonly hceRepository: HceRepository,
  ) {}

  async execute(idHce: string): Promise<void> {
    return this.hceRepository.delete(idHce);
  }
}