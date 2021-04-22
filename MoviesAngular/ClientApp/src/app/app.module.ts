import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies/movies-details.component';
import { MoviesAddEditComponent } from './movies/movies-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    MoviesAddEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent, pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'movies/:id', component: MoviesDetailsComponent },
      { path: 'movies-add', component: MoviesAddEditComponent },
      { path: 'movies/update/:id', component: MoviesAddEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
