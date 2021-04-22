import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './Movie';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add-edit.component.html'
})
export class MoviesAddEditComponent {
  public movie: Movie = <Movie>{};
  public id: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      http.get<Movie>(baseUrl + 'api/movies/' + this.id).subscribe(result => {
        this.movie = result;
      }, error => console.error(error));
    }
  }

  public saveMovie() {
    if (this.id) {
      this.http.put(this.baseUrl + 'api/movies/' + this.id, this.movie).subscribe(result => {
        this.router.navigateByUrl("/movies");
      }, error => console.error(error))
    } else {
      this.http.post(this.baseUrl + 'api/movies', this.movie).subscribe(result => {
        this.router.navigateByUrl("/movies");
      }, error => console.error(error))
    }
  }
}
