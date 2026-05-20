
// ARCHIVO: src/modules/usuario/usuario.module.ts

import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { UsuarioController } from './usuario.controller';

import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { CreateUsuarioUseCase } from './application/use-cases/create-usuario.usecase';
import { RegistrarUsuarioUseCase } from './application/use-cases/registrar-usuario.use-case';
import { AutenticarUsuarioUseCase } from './application/use-cases/autenticar-usuario.use-case';
import { GetUsuarioByIdUseCase } from './application/use-cases/get-usuario-by-id.usecase';
import { GetUsuarioByEmailUseCase } from './application/use-cases/get-usuario-by-email.usecase';

import { UserRepositoryImpl } from './infrastructure/repositories/user.repository.impl';
import { AccesoRepositoryImpl } from './infrastructure/repositories/acceso.repository.impl';

@Module({
  controllers: [UsuarioController],
  providers: [
    {
      provide: Pool,
      useFactory: () =>
        new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
    },

    CreateUserUseCase,
    CreateUsuarioUseCase,
    RegistrarUsuarioUseCase,
    AutenticarUsuarioUseCase,
    GetUsuarioByIdUseCase,
    GetUsuarioByEmailUseCase,

    {
      provide: 'UsuarioRepository',
      useClass: UserRepositoryImpl,
    },

    {
      provide: 'AccesoRepository',
      useClass: AccesoRepositoryImpl,
    },
  ],
  exports: ['UsuarioRepository', 'AccesoRepository', Pool],
})
export class UsuarioModule {}
