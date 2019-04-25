import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-releaselist',
  templateUrl: './releaselist.component.html',
  styleUrls: ['./releaselist.component.scss'],
})
export class ReleaselistComponent implements OnInit {
  @Input() movies: any[];
  @Input() wrapMovies: number;

  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  slideOpts = {
    effect: 'flip',
    pagination: false,

  };
  numberOfSlldes: number[];
  constructor() { }

  ngOnInit() {
    this.numberOfSlldes = Array(2);
  }
  setFavorite(movie) {
    if (!movie.favorite) {
      movie.favorite = true;
    }
    else {
      movie.favorite = !movie.favorite;
    }
  }
}
