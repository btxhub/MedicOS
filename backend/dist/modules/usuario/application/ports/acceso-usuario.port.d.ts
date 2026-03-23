import { Acceso } from '../../domain/entities';
export interface AccesoUsuarioPort {
    ejecutar(acceso: Acceso): Promise<void>;
}
