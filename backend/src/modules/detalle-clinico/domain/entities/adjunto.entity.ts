// ARCHIVO: src/modules/detalle-clinico/domain/entities/adjunto.entity.ts
export class Adjunto {
  constructor(
    public readonly idAdj: string,
    public readonly idHce: string,
    public readonly nombreAdj: string,
    public readonly tipoAdj: string,
    public readonly urlAdj: string,
    public readonly createdAdj: Date
  ) {}
}
