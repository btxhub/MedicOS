import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class GetUsuarioByIdUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  execute(idUser: string): Promise<Usuario | null> {
    return this.usuarioRepository.findById(idUser);
  }
}
