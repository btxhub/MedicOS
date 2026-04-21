// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-tratamiento-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

@Injectable()
export class GetTratamientoByHceUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: TratamientoRepository,
  ) {}

  async execute(idHce: string) {
    return await this.repository.findByHce(Number(idHce));
  }
}