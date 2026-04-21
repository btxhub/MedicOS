// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-evolucion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

@Injectable()
export class UpdateEvolucionUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: EvolucionRepository,
  ) {}

  async execute(id: string, data: any) {
    await this.repository.delete(Number(id));
    return await this.repository.create({
      idHce: Number(data.idHce),
      idDoc: Number(data.idDoc),
      nota: data.nota,
    });
  }
}