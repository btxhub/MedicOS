// ARCHIVO: src/modules/hce/application/use-cases/update-hce.usecase.ts

import { Injectable, Inject } from '@nestjs/common';
import { HceRepository } from '../../domain/repositories/hce.repository';

@Injectable()
export class UpdateHceUseCase {
  constructor(
    @Inject('HceRepository')
    private readonly hceRepository: HceRepository,
  ) {}

  async execute(data: any) {
    return this.hceRepository.update(data);
  }
}
