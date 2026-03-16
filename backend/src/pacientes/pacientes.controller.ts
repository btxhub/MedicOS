import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() data: any) {
    return this.pacientesService.create(data);
  }

  @Get()
  findAll() {
    return this.pacientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.pacientesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(id);
  }
}
