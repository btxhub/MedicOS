// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-signos-vitales.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateSignosVitalesUseCase {
  constructor(
    @Inject('SignosVitalesRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: Number(data.idHce),
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