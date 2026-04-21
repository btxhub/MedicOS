// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-adjunto.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

@Injectable()
export class CreateAdjuntoUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: AdjuntoRepository,
  ) {}

  async execute(data: any) {
    return await this.repository.create({
      idHce: Number(data.idHce),
      url: data.url,
    });
  }
}