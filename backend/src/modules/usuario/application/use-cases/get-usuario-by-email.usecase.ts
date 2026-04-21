import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class GetUsuarioByEmailUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(email: string): Promise<any> {
    return this.repository.findByEmail(email);
  }
}