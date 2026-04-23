import { Module } from '@nestjs/common';
import { PublicidadController } from './publicidad.controller';
import { CreatePublicidadUseCase } from './application/use-cases/create-publicidad.usecase';
import { PublicidadRepositoryImpl } from './infrastructure/repositories/publicidad.repository.impl';

@Module({
  controllers: [PublicidadController],
  providers: [
    CreatePublicidadUseCase,
    {
      provide: 'PublicidadRepository',
      useClass: PublicidadRepositoryImpl,
    },
  ],
})
export class PublicidadModule {}