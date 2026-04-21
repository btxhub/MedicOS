// ARCHIVO: src/modules/detalle-clinico/domain/entities/signos-vitales.entity.ts

export class SignosVitales {
  constructor(
    public readonly id: string,
    public readonly idHce: string,
    public readonly presionArterialSv: string,
    public readonly frecuenciaCardiacaSv: string,
    public readonly frecuenciaRespiratoriaSv: string,
    public readonly temperaturaSv: string,
    public readonly saturacionOxigenoSv: string,
    public readonly pesoSv: string,
    public readonly tallaSv: string,
    public readonly createdAt: Date,
  ) {}
}