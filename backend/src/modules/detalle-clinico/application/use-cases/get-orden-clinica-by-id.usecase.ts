// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-orden-clinica-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetOrdenClinicaByIdUseCase {
  constructor(
    @Inject('OrdenClinicaRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return await this.repository.findById(numericId);
  }
}
