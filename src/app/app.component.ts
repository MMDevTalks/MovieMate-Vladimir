import { Component } from '@angular/core';
import { MOVIES } from './mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = MOVIES
  title = 'app';
}
