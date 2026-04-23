// ARCHIVO: get-adjunto-by-hce.usecase.ts (NORMALIZACIÓN GET HCE)

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetAdjuntoByHceUseCase {
  constructor(
    @Inject('AdjuntoRepository')
    private readonly repository: any,
  ) {}

  async execute(idHce: string) {
    const numericId = Number(idHce);

    if (isNaN(numericId)) return [];

    const result = await this.repository.findByHce(numericId);

    return result || [];
  }
}