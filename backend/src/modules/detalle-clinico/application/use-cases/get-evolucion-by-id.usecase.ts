// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-evolucion-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

@Injectable()
export class GetEvolucionByIdUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: EvolucionRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.findById(Number(id));
  }
}