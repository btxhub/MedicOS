// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-tratamiento-by-hce.usecase.ts
import type { Tratamiento } from '../../domain/entities/tratamiento.entity';
import type { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

export class GetTratamientoByHceUseCase {
  constructor(private readonly tratamientoRepository: TratamientoRepository) {}

  execute(idHce: string): Promise<Tratamiento[]> {
    return this.tratamientoRepository.findByHce(idHce);
  }
}