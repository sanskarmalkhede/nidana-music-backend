import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getSongs(): Promise<import("./song.entity").Song[]>;
    seedSongs(): Promise<string>;
    toggleFavorite(id: string): Promise<import("./song.entity").Song>;
}
