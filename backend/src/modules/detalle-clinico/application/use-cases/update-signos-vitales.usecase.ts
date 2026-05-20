// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-signos-vitales.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateSignosVitalesUseCase {
  constructor(
    @Inject('SignosVitalesRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string, data: any) {
    const numericId = Number(id);
    if (isNaN(numericId)) return null;

    return await this.repository.update(numericId, {
      presion: data.presion,
      fc: data.fc,
      fr: data.fr,
      temp: data.temp,
      peso: data.peso,
      talla: data.talla,
      satO2: data.satO2,
    });
  }
}