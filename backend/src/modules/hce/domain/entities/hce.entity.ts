// ARCHIVO: src/modules/hce/domain/entities/hce.entity.ts
export class Hce {
  idHce: string;
  idDoc: string;
  idPac: string;
  idCita?: string;
  fechaHoraHce: Date;
  motivoHce: string;
  enfActHce: string;
  exploracionHce: string;
  diagnosticoResumenHce: string;
  tratamientoResumenHce: string;
  consentimientoHce: boolean;
  createdHce: Date;
  updatedHce: Date;
}