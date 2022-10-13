import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { keys } from 'src/keys';
import { handleHttpGet } from '../../common/utils';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {}

  async getMovies(search: string) {
    const url = `${this.configService.get('MOVIE_API_URL')}?s=${search}&apiKey=${keys.movieApi}`;
    this.logger.log('getMovies url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }

  async getMovie(imdbId: string) {
    const url = `${this.configService.get('MOVIE_API_URL')}?i=${imdbId}&apiKey=${keys.movieApi}`;
    this.logger.log('getMovie url - ', url);
    return handleHttpGet(this.httpService, url, this.logger);
  }
}
