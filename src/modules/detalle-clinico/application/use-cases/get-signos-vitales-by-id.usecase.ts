// ARCHIVO: get-signos-vitales-by-id.usecase.ts (NORMALIZACIÓN GET ID)

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetSignosVitalesByIdUseCase {
  constructor(
    @Inject('SignosVitalesRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);

    if (isNaN(numericId)) return null;

    const result = await this.repository.findById(numericId);

    if (!result) return null;

    return {
      id: result.id,
      idHce: result.idHce,
      presionSig: result.presionSig,
      fcSig: result.fcSig,
      frSig: result.frSig,
      tempSig: result.tempSig,
      pesoSig: result.pesoSig,
      tallaSig: result.tallaSig,
      satO2Sig: result.satO2Sig,
      createdSig: result.createdSig,
    };
  }
}