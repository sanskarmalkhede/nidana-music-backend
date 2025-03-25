import { Repository } from 'typeorm';
import { Song } from './song.entity';
export declare class AppService {
    private songRepository;
    constructor(songRepository: Repository<Song>);
    getSongs(): Promise<Song[]>;
    seedSongs(): Promise<string>;
    toggleFavorite(id: number): Promise<Song>;
}
