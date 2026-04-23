// ARCHIVO: src/modules/agenda/application/use-cases/get-cita-by-id.usecase.ts
import type { Cita } from '../../domain/entities/cita.entity';
import type { CitaRepository } from '../../domain/repositories/cita.repository';

export class GetCitaByIdUseCase {
  constructor(private readonly citaRepository: CitaRepository) {}

  execute(id: string): Promise<Cita | null> {
    return this.citaRepository.findById(id);
  }
}