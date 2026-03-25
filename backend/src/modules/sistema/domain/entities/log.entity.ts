export class Log {
  idLog: string;
  idUsuario: string;
  accionLog: string;
  moduloLog: string;
  entidadLog: string;
  entidadRefLog: string;
  fechaLog: Date;
  ipLog: string;

  constructor(params: {
    idLog: string;
    idUsuario: string;
    accionLog: string;
    moduloLog: string;
    entidadLog: string;
    entidadRefLog: string;
    fechaLog: Date;
    ipLog: string;
  }) {
    this.idLog = params.idLog;
    this.idUsuario = params.idUsuario;
    this.accionLog = params.accionLog;
    this.moduloLog = params.moduloLog;
    this.entidadLog = params.entidadLog;
    this.entidadRefLog = params.entidadRefLog;
    this.fechaLog = params.fechaLog;
    this.ipLog = params.ipLog;
  }
}