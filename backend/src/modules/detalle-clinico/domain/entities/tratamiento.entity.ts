// ARCHIVO: src/modules/detalle-clinico/domain/entities/tratamiento.entity.ts
export class Tratamiento {
  constructor(
    public readonly idTrat: string,
    public readonly idHce: string,
    public readonly descripcionTrat: string,
    public readonly indicacionesTrat: string,
    public readonly createdTrat: Date
  ) {}
}