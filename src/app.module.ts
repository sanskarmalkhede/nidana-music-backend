import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Song } from './song.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:J72OGjBeANIxV0jQ@sensuously-feasible-snail.data-1.use1.tembo.io:5432/postgres',
      entities: [Song],
      synchronize: true, 
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([Song]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}