import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service'

@Component({
  selector: 'app-movie',
  providers: [MovieService],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  error: any;
  
  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movieService.getMovies().then(movies => this.movies = movies)
  }

}
