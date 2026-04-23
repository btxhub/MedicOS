// ARCHIVO: src/modules/detalle-clinico/domain/entities/evolucion.entity.ts

export class Evolucion {
  constructor(
    public readonly id: string,
    public readonly idHce: string,
    public readonly descripcionEvo: string,
    public readonly fechaEvo: string,
    public readonly usuarioEvo: string,
    public readonly createdAt: Date,
  ) {}
}