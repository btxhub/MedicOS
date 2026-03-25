// ARCHIVO: src/modules/detalle-clinico/domain/entities/receta.entity.ts
export class Receta {
  constructor(
    public readonly idRec: string,
    public readonly idHce: string,
    public readonly medicamentoRec: string,
    public readonly dosisRec: string,
    public readonly viaRec: string,
    public readonly frecuenciaRec: string,
    public readonly duracionRec: string,
    public readonly indicacionesRec: string,
    public readonly createdRec: Date
  ) {}
}