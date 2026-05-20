// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-diagnostico.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateDiagnosticoUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string, data: any) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return await this.repository.update(numericId, {
      descripcion: data.descripcion,
    });
  }
}