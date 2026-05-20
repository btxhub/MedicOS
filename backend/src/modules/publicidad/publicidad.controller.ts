// ARCHIVO: /home/btx/MedicOS/backend/src/modules/publicidad/publicidad.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../../core/security/guards/auth.guard';
import { RolesGuard } from '../../core/security/guards/roles.guard';

@Controller('publicidad')
@UseGuards(AuthGuard, RolesGuard)
export class PublicidadController {

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return { id, ...body };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}