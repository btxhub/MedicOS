// ARCHIVO: backend/src/modules/hce/infrastructure/hce.controller.ts

import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import {
  GetAllHceUseCase,
  GetHceByIdUseCase,
  CreateHceUseCase,
} from '../application/use-cases';

@Controller('hce')
export class HceController {
  constructor(
    private readonly getAllHce: GetAllHceUseCase,
    private readonly getHceById: GetHceByIdUseCase,
    private readonly createHce: CreateHceUseCase,
  ) {}

  @Get()
  async findAll() {
    return await this.getAllHce.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getHceById.execute(id);
  }

  @Post()
  async create(@Body() body: any) {
    return await this.createHce.execute(body);
  }
}