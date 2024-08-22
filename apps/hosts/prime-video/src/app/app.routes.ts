import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('home/homeModule').then((m) => m.HomePageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('profile/ProfileModule').then((m) => m.WishListModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('movie/movieModule').then((m) => m.MoviePageModule),
  },
];
