// ARCHIVO: src/modules/paciente/application/use-cases/get-all-pacientes.usecase.ts

export class GetAllPacientesUseCase {
  async execute() {
    return [
      {
        idPac: 1,
        nombrePac: 'Juan',
        apellidoPac: 'Pérez',
      },
    ];
  }
}