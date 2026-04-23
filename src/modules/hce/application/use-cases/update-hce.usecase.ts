// ARCHIVO: src/modules/hce/application/use-cases/update-hce.usecase.ts
import { Hce } from '../../domain/entities/hce.entity';
import { HceRepository } from '../../domain/repositories/hce.repository';

export class UpdateHceUseCase {
  constructor(private readonly hceRepository: HceRepository) {}

  async execute(hce: Hce): Promise<Hce> {
    return this.hceRepository.update(hce);
  }
}