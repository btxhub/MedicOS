// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-receta.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

@Injectable()
export class DeleteRecetaUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: RecetaRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}