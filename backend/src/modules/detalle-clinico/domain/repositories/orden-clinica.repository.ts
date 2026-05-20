// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/domain/repositories/orden-clinica.repository.ts

export interface OrdenClinicaRepository {
  create(data: any): Promise<any>;
  findById(id: number): Promise<any>;
  findByHce(idHce: number): Promise<any[]>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<number>;
}
