import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})
export class MylistComponent implements OnInit {
  @Input() movies: any[];
  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  slideOpts = {
    effect: 'flip',
    pagination: false

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
