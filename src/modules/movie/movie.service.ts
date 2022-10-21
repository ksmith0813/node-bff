import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getMovies(search: string) {
    const movierUrl = this.configService.get('MOVIE_API_URL');
    const key = this.configService.get('MOVIE_KEY');
    const url = `${movierUrl}?s=${search}&apiKey=${key}`;
    this.logger.log('getMovies url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }

  async getMovie(imdbId: string) {
    const movierUrl = this.configService.get('MOVIE_API_URL');
    const key = this.configService.get('MOVIE_KEY');
    const url = `${movierUrl}?i=${imdbId}&apiKey=${key}`;
    this.logger.log('getMovie url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
