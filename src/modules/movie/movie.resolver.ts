import { Args, Query, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { MovieService } from './movie.service';

@Resolver()
export class MovieResolver {
  private readonly logger = new Logger(MovieService.name);

  constructor(private readonly movieService: MovieService) {}

  @Query()
  async movies(@Args('search') search: string) {
    this.logger.log('movies resolver called');
    return this.movieService.getMovies(search);
  }

  @Query()
  async movie(@Args('imdbId') imdbId: string) {
    this.logger.log('movie resolver called');
    return this.movieService.getMovie(imdbId);
  }
}
