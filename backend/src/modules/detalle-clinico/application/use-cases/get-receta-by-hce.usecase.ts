// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-receta-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

@Injectable()
export class GetRecetaByHceUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: RecetaRepository,
  ) {}

  async execute(idHce: string) {
    return await this.repository.findByHce(Number(idHce));
  }
}