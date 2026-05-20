// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-receta-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetRecetaByHceUseCase {
  constructor(
    @Inject('RecetaRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) return [];

    return await this.repository.findByHce(numericId);
  }
}