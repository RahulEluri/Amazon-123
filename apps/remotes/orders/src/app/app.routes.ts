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
      import('./order-list/order-list.module').then((m) => m.OrderListModule),
  },
];
