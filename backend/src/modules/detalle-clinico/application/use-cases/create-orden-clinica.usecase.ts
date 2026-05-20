// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-orden-clinica.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateOrdenClinicaUseCase {
  constructor(
    @Inject('OrdenClinicaRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: Number(data.idHce),
      idDoc: Number(data.idDoc),
      tipoOrden: data.tipoOrden,
      prioridadOrden: data.prioridadOrden,
      indicacionClinica: data.indicacionClinica,
    });
  }
}
