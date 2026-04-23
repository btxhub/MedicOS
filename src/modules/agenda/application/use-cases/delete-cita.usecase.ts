// ARCHIVO: src/modules/agenda/application/use-cases/delete-cita.usecase.ts
import type { CitaRepository } from '../../domain/repositories/cita.repository';

export class DeleteCitaUseCase {
  constructor(private readonly citaRepository: CitaRepository) {}

  delete(id: string): Promise<void> {
    return this.citaRepository.delete(id);
  }
}