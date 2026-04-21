// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-adjunto.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

@Injectable()
export class UpdateAdjuntoUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: AdjuntoRepository,
  ) {}

  async execute(id: string, data: any) {
    await this.repository.delete(Number(id));
    return await this.repository.create({
      idHce: Number(data.idHce),
      url: data.url,
    });
  }
}