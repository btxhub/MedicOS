import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { PacientesService } from './pacientes.service';

type RequestWithUser = Request & { user?: any };

@Controller('pacientes')
export class PacientesController {
  constructor(private pacientesService: PacientesService) {}

  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Req() req: RequestWithUser,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    dto: CreatePacienteDto,
  ) {
    const doctorId = req.user?.doctorId;

    return this.pacientesService.create(doctorId, dto);
  }
}
