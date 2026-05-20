// ARCHIVO: receta.entity.ts (CORREGIDO FINAL)

export class Receta {
  constructor(
    public readonly id: number,
    public readonly idHce: number,
    public readonly descripcion: string,
    public readonly dosis: string,
    public readonly frecuencia: string,
    public readonly duracion: string,
    public readonly indicaciones: string,
    public readonly medico: string,
    public readonly createdAt: Date,
  ) {}
}