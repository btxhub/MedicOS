import type { Usuario } from '../entities/usuario.entity';

export interface UsuarioRepository {
  create(usuario: Usuario): Promise<Usuario>;
  findById(id: string): Promise<Usuario | null>;
  findByEmail(email: string): Promise<Usuario | null>;
  update(usuario: Usuario): Promise<Usuario>;
  delete(id: string): Promise<void>;
}