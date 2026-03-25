// ARCHIVO: src/modules/detalle-clinico/application/use-cases/create-tratamiento.usecase.ts
import type { Tratamiento } from '../../domain/entities/tratamiento.entity';
import type { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

export class CreateTratamientoUseCase {
  constructor(private readonly tratamientoRepository: TratamientoRepository) {}

  execute(tratamiento: Tratamiento): Promise<Tratamiento> {
    return this.tratamientoRepository.save(tratamiento);
  }
}