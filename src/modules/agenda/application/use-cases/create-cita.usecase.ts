// ARCHIVO: src/modules/agenda/application/use-cases/create-cita.usecase.ts
import type { Cita } from '../../domain/entities/cita.entity';
import type { CitaRepository } from '../../domain/repositories/cita.repository';

export class CreateCitaUseCase {
  constructor(private readonly citaRepository: CitaRepository) {}

  create(entity: Cita): Promise<Cita> {
    return this.citaRepository.save(entity);
  }
}