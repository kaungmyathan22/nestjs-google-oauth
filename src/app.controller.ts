import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth (@Req() req) { }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect (@Req() req) {
    return this.appService.googleLogin(req);
  }
}
