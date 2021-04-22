import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './Movie';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html'
})
export class MoviesDetailsComponent {
  public id: string;
  public movie: Movie;

  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    http.get<Movie>(baseUrl + 'api/movies/' + this.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }
}
