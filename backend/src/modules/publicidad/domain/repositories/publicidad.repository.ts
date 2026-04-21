export interface PublicidadRepository {
  save(data: any): Promise<any>;
  findById(id: string): Promise<any | null>;
  update(data: any): Promise<any>;
  delete(id: string): Promise<void>;

  savePago(data: any): Promise<any>;
  findPagoById(id: string): Promise<any | null>;
  updatePago(data: any): Promise<any>;
  deletePago(id: string): Promise<void>;
}