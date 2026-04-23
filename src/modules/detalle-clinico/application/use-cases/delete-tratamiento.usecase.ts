// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-tratamiento.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

@Injectable()
export class DeleteTratamientoUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: TratamientoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}