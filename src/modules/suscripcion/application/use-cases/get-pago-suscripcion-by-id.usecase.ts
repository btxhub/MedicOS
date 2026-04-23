// ARCHIVO: src/modules/suscripcion/application/use-cases/get-pago-suscripcion-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetPagoSuscripcionByIdUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: number) {
    return this.repository.findPagoById(id);
  }
}