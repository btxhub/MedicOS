import { Controller, Post, Put, Body, Req, UseGuards, Param } from '@nestjs/common';
import { HceService } from './hce.service';
import { CreateHceDto } from './dto/create-hce.dto';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { CreateAdjuntoDto } from './dto/create-adjunto.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('hce')
export class HceController {

  constructor(private readonly hceService: HceService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() createHceDto: CreateHceDto,
    @Req() req: any
  ) {
    const doctorId = req.user.doctorId;
    return this.hceService.create(createHceDto, doctorId);
  }

  @UseGuards(AuthGuard)
  @Post(':id/evoluciones')
  createEvolution(
    @Param('id') hceId: string,
    @Body() dto: CreateEvolutionDto,
    @Req() req: any
  ) {
    const doctorId = req.user.doctorId;
    return this.hceService.createEvolution(hceId, dto, doctorId);
  }

  @UseGuards(AuthGuard)
  @Put('evoluciones/:id')
  updateEvolution(
    @Param('id') evolutionId: string,
    @Body() dto: UpdateEvolutionDto,
    @Req() req: any
  ) {
    const doctorId = req.user.doctorId;
    return this.hceService.updateEvolution(evolutionId, dto, doctorId);
  }

  @UseGuards(AuthGuard)
  @Post(':id/adjuntos')
  createAdjunto(
    @Param('id') hceId: string,
    @Body() dto: CreateAdjuntoDto,
    @Req() req: any
  ) {
    const doctorId = req.user.doctorId;
    return this.hceService.createAdjunto(hceId, dto, doctorId);
  }
}