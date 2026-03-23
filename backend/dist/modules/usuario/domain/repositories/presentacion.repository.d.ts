import type { Presentacion } from '../entities/presentacion.entity';
export interface PresentacionRepository {
    save(presentacion: Presentacion): Promise<Presentacion>;
    findById(id: string): Promise<Presentacion | null>;
    findByUsuarioId(usuarioId: string): Promise<Presentacion | null>;
    update(presentacion: Presentacion): Promise<Presentacion>;
    delete(id: string): Promise<void>;
}
