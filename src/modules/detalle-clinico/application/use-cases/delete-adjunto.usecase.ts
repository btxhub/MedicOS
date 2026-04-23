// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-adjunto.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

@Injectable()
export class DeleteAdjuntoUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: AdjuntoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}