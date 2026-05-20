// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-orden-clinica-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetOrdenClinicaByHceUseCase {
  constructor(
    @Inject('OrdenClinicaRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) return [];

    return await this.repository.findByHce(numericId);
  }
}
