import { Injectable } from '@angular/core';
import { MOVIES } from '../mocks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    return Observable.of(MOVIES);
  }

}
