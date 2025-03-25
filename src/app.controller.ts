import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('songs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSongs() {
    return this.appService.getSongs();
  }

  @Get('seed')
  seedSongs() {
    return this.appService.seedSongs();
  }

  @Post(':id/toggle-favorite')
  toggleFavorite(@Param('id') id: string) {
    return this.appService.toggleFavorite(+id);
  }
}