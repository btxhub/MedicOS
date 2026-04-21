import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { CreateUsuarioUseCase } from './application/use-cases/create-usuario.usecase';
import { RegistrarUsuarioUseCase } from './application/use-cases/registrar-usuario.use-case';
import { AutenticarUsuarioUseCase } from './application/use-cases/autenticar-usuario.use-case';
import { GetUsuarioByIdUseCase } from './application/use-cases/get-usuario-by-id.usecase';
import { GetUsuarioByEmailUseCase } from './application/use-cases/get-usuario-by-email.usecase';
import { UserRepositoryImpl } from './infrastructure/repositories/user.repository.impl';

@Module({
  controllers: [UsuarioController],
  providers: [
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
  ],
})
export class UsuarioModule {}