import type { Acceso } from '../entities/acceso.entity';

export interface AccesoRepository {
  save(acceso: Acceso): Promise<Acceso>;
  findById(id: string): Promise<Acceso | null>;
  findByUsuarioId(usuarioId: string): Promise<Acceso[]>;
  delete(id: string): Promise<void>;
}