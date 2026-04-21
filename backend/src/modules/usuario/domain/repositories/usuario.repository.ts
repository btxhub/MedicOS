// ARCHIVO: src/modules/usuario/domain/repositories/usuario.repository.ts

export interface UsuarioRepository {
  create(data: any): Promise<any>;
  findById(id: string): Promise<any | null>;
  findByEmail(email: string): Promise<any | null>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<boolean>;
}