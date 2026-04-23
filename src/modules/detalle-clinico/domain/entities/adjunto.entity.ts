// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/domain/entities/adjunto.entity.ts

export class Adjunto {
  constructor(
    public readonly id: number,
    public readonly idHce: number,
    public readonly url: string,
    public readonly createdAt: Date,
  ) {}
}