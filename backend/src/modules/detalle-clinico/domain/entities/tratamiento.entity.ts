// ARCHIVO: src/modules/detalle-clinico/domain/entities/tratamiento.entity.ts

export class Tratamiento {
  constructor(
    public readonly id: string,
    public readonly idHce: string,
    public readonly descripcionTrat: string,
    public readonly tipoTrat: string,
    public readonly createdAt: Date,
  ) {}
}