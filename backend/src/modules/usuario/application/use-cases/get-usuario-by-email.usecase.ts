import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class GetUsuarioByEmailUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  execute(emailUser: string): Promise<Usuario | null> {
    return this.usuarioRepository.findByEmail(emailUser);
  }
}
