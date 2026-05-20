// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-orden-clinica.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateOrdenClinicaUseCase {
  constructor(
    @Inject('OrdenClinicaRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string, data: any) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    const result = await this.repository.update(numericId, {
      tipoOrden: data.tipoOrden,
      prioridadOrden: data.prioridadOrden,
      indicacionClinica: data.indicacionClinica,
    });

    return result;
  }
}
