import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent,
      },
    ]),
  ],
})
export class MoviePageModule {}
