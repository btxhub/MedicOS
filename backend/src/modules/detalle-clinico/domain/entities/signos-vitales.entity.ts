// ARCHIVO: src/modules/detalle-clinico/domain/entities/signos-vitales.entity.ts
export class SignosVitales {
  constructor(
    public readonly idSig: string,
    public readonly idHce: string,
    public readonly presionSig: string,
    public readonly fcSig: number,
    public readonly frSig: number,
    public readonly tempSig: number,
    public readonly pesoSig: number,
    public readonly tallaSig: number,
    public readonly satO2Sig: number,
    public readonly createdSig: Date
  ) {}
}