import { Controller, Post, Body, UseGuards, Req, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { HceService } from './hce.service';
import { CreateAdjuntoDto } from './dto/create-adjunto.dto';

@Controller('hce')
@UseGuards(JwtAuthGuard)
export class HceController {
  constructor(private readonly hceService: HceService) {}

  @Post(':id/adjuntos')
  async createAdjunto(
    @Param('id') id: string,
    @Body() dto: CreateAdjuntoDto,
    @Req() req
  ) {
    const doctorId = req.user.doctorId;

    return this.hceService.createAdjunto(id, dto, doctorId);
  }
}