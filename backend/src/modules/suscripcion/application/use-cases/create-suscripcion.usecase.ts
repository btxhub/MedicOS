import { Inject, Injectable } from '@nestjs/common';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

@Injectable()
export class CreateSuscripcionUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: SuscripcionRepository,
  ) {}

  async execute(data: any) {
    const created = await this.repository.save(data);

    return {
      success: true,
      data: created,
    };
  }
}