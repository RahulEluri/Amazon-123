import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'load',
    loadChildren: () =>
      import('./movie-page/movie-page.module').then((m) => m.MoviePageModule),
  },
];
