// ARCHIVO: src/modules/suscripcion/application/use-cases/delete-suscripcion.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: any,
  ) {}

  async execute(id: number) {
    return this.repository.delete(id);
  }
}