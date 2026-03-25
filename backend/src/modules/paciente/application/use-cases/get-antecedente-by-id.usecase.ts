// ARCHIVO: src/modules/paciente/application/use-cases/get-antecedente-by-id.usecase.ts
import type { Antecedente } from '../../domain/entities/antecedente.entity';
import type { AntecedenteRepository } from '../../domain/repositories/antecedente.repository';

export class GetAntecedenteByIdUseCase {
  constructor(private readonly antecedenteRepository: AntecedenteRepository) {}

  execute(id: string): Promise<Antecedente | null> {
    return this.antecedenteRepository.findById(id);
  }
}