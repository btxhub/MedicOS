// ARCHIVO: src/modules/detalle-clinico/domain/entities/evolucion.entity.ts
export class Evolucion {
  constructor(
    public readonly idEvo: string,
    public readonly idHce: string,
    public readonly idDoc: string,
    public readonly fechaHoraEvo: Date,
    public readonly notaEvo: string,
    public readonly createdEvo: Date
  ) {}
}
