// ARCHIVO: src/modules/detalle-clinico/domain/entities/diagnostico.entity.ts

export class Diagnostico {
  constructor(
    public id: string,
    public idHce: string,
    public descripcion: string,
    public codigo: string,
    public medico: string,
    public createdAt: Date,
  ) {}
}