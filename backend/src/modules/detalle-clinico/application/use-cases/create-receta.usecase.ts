// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-receta.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

@Injectable()
export class CreateRecetaUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: RecetaRepository,
  ) {}

  async execute(data: any) {
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}