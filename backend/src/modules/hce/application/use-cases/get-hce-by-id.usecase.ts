// ARCHIVO: backend/src/modules/hce/application/use-cases/get-hce-by-id.usecase.ts

export class GetHceByIdUseCase {
  async execute(id: string) {
    return { id };
  }
}