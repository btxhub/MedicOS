// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-receta-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

@Injectable()
export class GetRecetaByIdUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: RecetaRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.findById(Number(id));
  }
}