// ARCHIVO: src/modules/suscripcion/application/use-cases/delete-pago-suscripcion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeletePagoSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: number) {
    return this.repository.deletePago(id);
  }
}