import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class CreateUserUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(data: any): Promise<any> {
    if (!data.email || !data.password) {
      throw new Error('DATA_INVALID');
    }

    return this.repository.create({
      email: data.email,
      password: data.password,
    });
  }
}