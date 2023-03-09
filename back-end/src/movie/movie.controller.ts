import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':movieName')
  findOne(@Param('movieName') movieName: string) {
    return this.movieService.findOne(movieName);
  }
}
