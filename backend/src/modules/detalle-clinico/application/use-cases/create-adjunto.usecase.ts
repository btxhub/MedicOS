// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-adjunto.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateAdjuntoUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: Number(data.idHce),
      url: data.url,
    });
  }
}