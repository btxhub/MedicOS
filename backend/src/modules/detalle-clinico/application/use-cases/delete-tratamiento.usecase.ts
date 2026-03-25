// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-tratamiento.usecase.ts
import type { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

export class DeleteTratamientoUseCase {
  constructor(private readonly tratamientoRepository: TratamientoRepository) {}

  execute(idTrat: string): Promise<void> {
    return this.tratamientoRepository.delete(idTrat);
  }
}