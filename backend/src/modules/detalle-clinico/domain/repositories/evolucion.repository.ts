// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/domain/repositories/evolucion.repository.ts

export interface EvolucionRepository {
  create(data: any): Promise<any>;
  findById(id: number): Promise<any>;
  findByHce(idHce: number): Promise<any[]>;
  delete(id: number): Promise<number>;
}