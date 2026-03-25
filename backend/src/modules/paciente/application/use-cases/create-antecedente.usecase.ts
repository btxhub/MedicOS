// ARCHIVO: src/modules/paciente/application/use-cases/create-antecedente.usecase.ts
import type { Antecedente } from '../../domain/entities/antecedente.entity';
import type { AntecedenteRepository } from '../../domain/repositories/antecedente.repository';

export class CreateAntecedenteUseCase {
  constructor(private readonly antecedenteRepository: AntecedenteRepository) {}

  create(entity: Antecedente): Promise<Antecedente> {
    return this.antecedenteRepository.save(entity);
  }
}