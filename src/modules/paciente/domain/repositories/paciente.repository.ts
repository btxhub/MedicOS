export interface PacienteRepository {
  create(data: any): Promise<any>;
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<boolean>;

  createContacto(data: any): Promise<any>;
  findContactoById(id: string): Promise<any>;
  updateContacto(id: string, data: any): Promise<any>;
  deleteContacto(id: string): Promise<boolean>;

  createSeguro(data: any): Promise<any>;
  findSeguroById(id: string): Promise<any>;
  updateSeguro(id: string, data: any): Promise<any>;
  deleteSeguro(id: string): Promise<boolean>;

  createAntecedente(data: any): Promise<any>;
  findAntecedenteById(id: string): Promise<any>;
  updateAntecedente(id: string, data: any): Promise<any>;
  deleteAntecedente(id: string): Promise<boolean>;
}