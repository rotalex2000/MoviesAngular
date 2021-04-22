import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Movie } from './Movie'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {
  public movies: Movie[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router
  ) {
    http.get<Movie[]>(baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }

  public deleteMovie(id: string) {
    this.http.delete(this.baseUrl + 'api/movies/' + id).subscribe(result => {
      this.router.navigateByUrl("/movies");
    }, error => console.error(error))
  }
}
