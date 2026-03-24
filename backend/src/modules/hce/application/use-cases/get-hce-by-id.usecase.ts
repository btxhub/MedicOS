// ARCHIVO: src/modules/hce/application/use-cases/get-hce-by-id.usecase.ts
import { Hce } from '../../domain/entities/hce.entity';
import { HceRepository } from '../../domain/repositories/hce.repository';

export class GetHceByIdUseCase {
  constructor(private readonly hceRepository: HceRepository) {}

  async execute(idHce: string): Promise<Hce | null> {
    return this.hceRepository.findById(idHce);
  }
}