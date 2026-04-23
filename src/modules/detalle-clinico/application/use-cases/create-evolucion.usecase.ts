// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-evolucion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateEvolucionUseCase {
  constructor(
    @Inject('EvolucionRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}