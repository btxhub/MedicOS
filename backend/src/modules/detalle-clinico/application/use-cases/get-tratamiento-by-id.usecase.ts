// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-tratamiento-by-id.usecase.ts
import type { Tratamiento } from '../../domain/entities/tratamiento.entity';
import type { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

export class GetTratamientoByIdUseCase {
  constructor(private readonly tratamientoRepository: TratamientoRepository) {}

  execute(idTrat: string): Promise<Tratamiento | null> {
    return this.tratamientoRepository.findById(idTrat);
  }
}