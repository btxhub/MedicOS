// ARCHIVO: /home/btx/MedicOS/backend/src/modules/usuario/application/use-cases/create-user.usecase.ts

import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class CreateUserUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(data: any): Promise<any> {
    const email = data.email || data.emailAcceso;

    if (!email || !data.password) {
      throw new Error('DATA_INVALID');
    }

    return this.repository.create({
      email,
      password: data.password,
    });
  }
}