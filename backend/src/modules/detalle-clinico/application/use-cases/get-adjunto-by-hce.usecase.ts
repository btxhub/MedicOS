// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-adjunto-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

@Injectable()
export class GetAdjuntoByHceUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: AdjuntoRepository,
  ) {}

  async execute(idHce: string) {
    return await this.repository.findByHce(Number(idHce));
  }
}