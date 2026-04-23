import { Controller, Get } from '@nestjs/common';
<<<<<<< HEAD
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
=======

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
    };
>>>>>>> 137396805916853fa2c348798080f738ce772f0d
  }
}
