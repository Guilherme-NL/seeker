import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  async findOne(movieName: string) {
    const url = `https://www.omdbapi.com/?apikey=33a0cf2e&t=${movieName}`;
    const response = await axios.get(url);
    const data: MovieDto = new MovieDto();

    data.Title = response.data.Title;
    data.Genre = response.data.Genre;
    data.Actors = response.data.Actors;
    data.Plot = response.data.Plot;
    data.Poster = response.data.Poster;
    data.imdbRating = response.data.imdbRating;

    return data;
  }
}
