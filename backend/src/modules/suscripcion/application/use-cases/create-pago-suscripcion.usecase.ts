// ARCHIVO: src/modules/suscripcion/application/use-cases/create-pago-suscripcion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreatePagoSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.createPago(data);
  }
}