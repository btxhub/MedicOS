// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-orden-clinica.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { OrdenClinicaRepository } from '../../domain/repositories/orden-clinica.repository';

@Injectable()
export class DeleteOrdenClinicaUseCase {
  constructor(
    @Inject('OrdenClinicaRepository')
    private readonly repository: OrdenClinicaRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}
