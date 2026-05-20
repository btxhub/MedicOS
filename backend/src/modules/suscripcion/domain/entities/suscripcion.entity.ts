export class Suscripcion {
  idSuscripcion: number;
  refDocSuscripcion: string;
  tipoSuscripcion: string;
  estadoSuscripcion: string;
  fechaInicioSuscripcion: Date;
  fechaFinSuscripcion: Date | null;
  activoSuscripcion: boolean;
  createdSuscripcion: Date;
  updatedSuscripcion: Date;
}