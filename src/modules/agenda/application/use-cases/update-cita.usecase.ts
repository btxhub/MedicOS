// ARCHIVO: src/modules/agenda/application/use-cases/update-cita.usecase.ts
import type { Cita } from '../../domain/entities/cita.entity';
import type { CitaRepository } from '../../domain/repositories/cita.repository';

export class UpdateCitaUseCase {
  constructor(private readonly citaRepository: CitaRepository) {}

  update(entity: Cita): Promise<Cita> {
    return this.citaRepository.update(entity);
  }
}