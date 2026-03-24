// ARCHIVO: src/modules/hce/application/use-cases/get-all-hce.usecase.ts
import { Hce } from '../../domain/entities/hce.entity';
import { HceRepository } from '../../domain/repositories/hce.repository';

export class GetAllHceUseCase {
  constructor(private readonly hceRepository: HceRepository) {}

  async execute(): Promise<Hce[]> {
    return this.hceRepository.findAll();
  }
}