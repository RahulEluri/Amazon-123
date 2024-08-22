import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeMovieComponent } from '../home-movie/home-movie.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeMovieComponent,
      },
    ]),
  ],
})
export class HomePageModule {}
