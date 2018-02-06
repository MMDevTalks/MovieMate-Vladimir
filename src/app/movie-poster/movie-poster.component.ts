import { Component, HostBinding, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie:any = {};
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;
  constructor() { }

  ngOnInit() {
  }

  clickMoviePoster($event, movie) {
    this.selectMovie.emit(movie);
  }
}
