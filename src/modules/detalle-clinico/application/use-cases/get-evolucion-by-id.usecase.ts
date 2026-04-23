// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-evolucion-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetEvolucionByIdUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return await this.repository.findById(numericId);
  }
}