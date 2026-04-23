// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-tratamiento.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateTratamientoUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string, data: any) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return this.repository.update(numericId, {
      descripcion: data.descripcion,
    });
  }
}