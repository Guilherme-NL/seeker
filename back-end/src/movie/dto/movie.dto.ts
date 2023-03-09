import { IsString } from 'class-validator';

export class MovieDto {
  @IsString()
  Title: string;

  @IsString()
  Genre: string;

  @IsString()
  Actors: string;

  @IsString()
  Plot: string;

  @IsString()
  Poster: string;

  @IsString()
  imdbRating: string;
}
