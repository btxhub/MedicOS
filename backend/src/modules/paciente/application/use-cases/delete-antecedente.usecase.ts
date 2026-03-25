// ARCHIVO: src/modules/paciente/application/use-cases/delete-antecedente.usecase.ts
import type { AntecedenteRepository } from '../../domain/repositories/antecedente.repository';

export class DeleteAntecedenteUseCase {
  constructor(private readonly antecedenteRepository: AntecedenteRepository) {}

  delete(id: string): Promise<void> {
    return this.antecedenteRepository.delete(id);
  }
}