import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Patch,
  Param,
  Query,
  Req,
  UseGuards,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { UpdateEstadoPacienteDto } from './dto/update-estado-paciente.dto';
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

  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Req() req: RequestWithUser,
    @Query('page') pageQuery?: string,
    @Query('limit') limitQuery?: string,
  ) {
    const doctorId = req.user?.doctorId;

    const page = pageQuery ? Number(pageQuery) : 1;
    const limit = limitQuery ? Number(limitQuery) : 10;

    if (isNaN(page) || isNaN(limit)) {
      throw new BadRequestException('Parámetros inválidos');
    }

    if (page < 1) {
      throw new BadRequestException('page debe ser >= 1');
    }

    if (limit < 1 || limit > 100) {
      throw new BadRequestException('limit debe estar entre 1 y 100');
    }

    return this.pacientesService.findAll(doctorId, page, limit);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    dto: UpdatePacienteDto,
  ) {
    if (!id) {
      throw new BadRequestException('id inválido');
    }

    const doctorId = req.user?.doctorId;

    return this.pacientesService.update(id, doctorId, dto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/estado')
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    )
    dto: UpdateEstadoPacienteDto,
  ) {
    if (!id) {
      throw new BadRequestException('id inválido');
    }

    const doctorId = req.user?.doctorId;

    return this.pacientesService.updateStatus(id, doctorId, dto);
  }
}