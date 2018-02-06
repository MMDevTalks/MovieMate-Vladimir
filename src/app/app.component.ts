import { Component } from '@angular/core';
import { MOVIES } from './mocks';
import { MovieService } from './core/movie.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies = [];
  selectedMovie: any = null;

  constructor(private _movieService: MovieService) {
    
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this._movieService.getMovies().subscribe(data=> {
      this.movies = data;
    })
  }
}
