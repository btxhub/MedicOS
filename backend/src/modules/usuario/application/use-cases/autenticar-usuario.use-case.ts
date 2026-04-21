import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class AutenticarUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(email: string, password: string): Promise<any> {
    const user = await this.repository.findByEmail(email);
    if (!user) return null;
    if (user.password !== password) return null;
    return user;
  }
}