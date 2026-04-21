// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-evolucion-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

@Injectable()
export class GetEvolucionByHceUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: EvolucionRepository,
  ) {}

  async execute(idHce: string) {
    return await this.repository.findByHce(Number(idHce));
  }
}