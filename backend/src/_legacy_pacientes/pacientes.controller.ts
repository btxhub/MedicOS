import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('pacientes')
export class PacientesController {

  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() data: CreatePacienteDto) {
    const refDocPac = 'TEMP_DOCTOR_ID';
    return this.pacientesService.create(data, refDocPac);
  }

  @Get()
  findAll() {
    const refDocPac = 'TEMP_DOCTOR_ID';
    return this.pacientesService.findAll(refDocPac);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const refDocPac = 'TEMP_DOCTOR_ID';
    return this.pacientesService.findOne(id, refDocPac);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePacienteDto) {
    const refDocPac = 'TEMP_DOCTOR_ID';
    return this.pacientesService.update(id, data, refDocPac);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const refDocPac = 'TEMP_DOCTOR_ID';
    return this.pacientesService.remove(id, refDocPac);
  }

}
