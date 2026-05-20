// ARCHIVO: orden-clinica.entity.ts

export class OrdenClinica {
  constructor(
    public readonly id: number,
    public readonly idHce: number,
    public readonly idDoc: number,
    public readonly tipoOrden: string,
    public readonly prioridadOrden: string,
    public readonly indicacionClinica: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
