// ARCHIVO: src/modules/hce/application/use-cases/delete-hce.usecase.ts
import { HceRepository } from '../../domain/repositories/hce.repository';

export class DeleteHceUseCase {
  constructor(private readonly hceRepository: HceRepository) {}

  async execute(idHce: string): Promise<void> {
    return this.hceRepository.delete(idHce);
  }
}