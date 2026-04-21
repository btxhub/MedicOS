// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-evolucion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

@Injectable()
export class CreateEvolucionUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: EvolucionRepository,
  ) {}

  async execute(data: any) {
    return await this.repository.create({
      idHce: Number(data.idHce),
      idDoc: Number(data.idDoc),
      nota: data.nota,
    });
  }
}