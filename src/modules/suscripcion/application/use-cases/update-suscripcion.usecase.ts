// ARCHIVO: src/modules/suscripcion/application/use-cases/update-suscripcion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: number, data: any) {
    return this.repository.update(id, data);
  }
}