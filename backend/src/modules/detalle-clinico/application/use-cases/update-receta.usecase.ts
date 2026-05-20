// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-receta.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateRecetaUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string, data: any) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    const result = await this.repository.update(numericId, {
      descripcion: data.descripcion,
    });

    return result;
  }
}