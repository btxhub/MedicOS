import { Inject, Injectable } from '@nestjs/common';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

@Injectable()
export class GetSuscripcionByIdUseCase {
  constructor(
    @Inject('SuscripcionRepository')
    private readonly repository: SuscripcionRepository,
  ) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}