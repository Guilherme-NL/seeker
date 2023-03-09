import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  async findOne(movieName: string) {
    console.log(movieName);
    const url = `https://www.omdbapi.com/?apikey=33a0cf2e&t=${movieName}`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  }
}
