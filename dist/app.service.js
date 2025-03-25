"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const song_entity_1 = require("./song.entity");
let AppService = class AppService {
    songRepository;
    constructor(songRepository) {
        this.songRepository = songRepository;
    }
    async getSongs() {
        return this.songRepository.find();
    }
    async seedSongs() {
        const songs = [
            { title: 'Blinding Lights', artist: 'The Weeknd', isFavorite: false },
            { title: 'Shape of You', artist: 'Ed Sheeran', isFavorite: false },
            { title: 'Levitating', artist: 'Dua Lipa', isFavorite: false },
            { title: 'Bad Guy', artist: 'Billie Eilish', isFavorite: false },
        ];
        await this.songRepository.clear();
        await this.songRepository.save(songs);
        return 'Database seeded with songs';
    }
    async toggleFavorite(id) {
        const song = await this.songRepository.findOneBy({ id });
        if (!song) {
            throw new Error('Song not found');
        }
        song.isFavorite = !song.isFavorite;
        return this.songRepository.save(song);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(song_entity_1.Song)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map