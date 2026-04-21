// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/domain/repositories/adjunto.repository.ts

export interface AdjuntoRepository {
  create(data: any): Promise<any>;
  findById(id: number): Promise<any>;
  findByHce(idHce: number): Promise<any[]>;
  delete(id: number): Promise<number>;
}