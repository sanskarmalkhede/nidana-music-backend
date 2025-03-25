import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async getSongs(): Promise<Song[]> {
    return this.songRepository.find();
  }

  async seedSongs(): Promise<string> {
    const songs = [
      { title: 'Blinding Lights', artist: 'The Weeknd', isFavorite: false },
      { title: 'Shape of You', artist: 'Ed Sheeran', isFavorite: false },
      { title: 'Levitating', artist: 'Dua Lipa', isFavorite: false },
      { title: 'Bad Guy', artist: 'Billie Eilish', isFavorite: false },
    ];

    await this.songRepository.clear(); // Clear existing songs
    await this.songRepository.save(songs);
    return 'Database seeded with songs';
  }

  async toggleFavorite(id: number): Promise<Song> {
    const song = await this.songRepository.findOneBy({ id });
    if (!song) {
      throw new Error('Song not found');
    }
    song.isFavorite = !song.isFavorite;
    return this.songRepository.save(song);
  }
}