import { Acceso } from '../../domain/entities';
export interface AccesoFactoryPort {
    crear(data: any): Acceso;
}
