// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-evolucion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

@Injectable()
export class DeleteEvolucionUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: EvolucionRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}