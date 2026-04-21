// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-receta.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

@Injectable()
export class UpdateRecetaUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: RecetaRepository,
  ) {}

  async execute(id: string, data: any) {
    await this.repository.delete(Number(id));
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}