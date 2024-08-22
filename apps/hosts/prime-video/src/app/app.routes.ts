import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
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
