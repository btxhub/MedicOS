// ARCHIVO: src/modules/detalle-clinico/domain/entities/diagnostico.entity.ts
export class Diagnostico {
  constructor(
    public readonly idDiag: string,
    public readonly idHce: string,
    public readonly codigoDiag: string,
    public readonly descripcionDiag: string,
    public readonly tipoDiag: string,
    public readonly createdDiag: Date
  ) {}
}