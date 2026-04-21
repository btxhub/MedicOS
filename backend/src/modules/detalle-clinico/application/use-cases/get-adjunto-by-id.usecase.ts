// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-adjunto-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

@Injectable()
export class GetAdjuntoByIdUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: AdjuntoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.findById(Number(id));
  }
}