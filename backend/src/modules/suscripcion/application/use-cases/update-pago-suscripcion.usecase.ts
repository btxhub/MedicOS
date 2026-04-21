// ARCHIVO: src/modules/suscripcion/application/use-cases/update-pago-suscripcion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdatePagoSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: number, data: any) {
    return this.repository.updatePago(id, data);
  }
}