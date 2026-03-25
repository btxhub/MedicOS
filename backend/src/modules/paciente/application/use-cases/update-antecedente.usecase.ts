// ARCHIVO: src/modules/paciente/application/use-cases/update-antecedente.usecase.ts
import type { Antecedente } from '../../domain/entities/antecedente.entity';
import type { AntecedenteRepository } from '../../domain/repositories/antecedente.repository';

export class UpdateAntecedenteUseCase {
  constructor(private readonly antecedenteRepository: AntecedenteRepository) {}

  update(entity: Antecedente): Promise<Antecedente> {
    return this.antecedenteRepository.update(entity);
  }
}