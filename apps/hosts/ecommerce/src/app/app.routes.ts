import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  { path: '', component: NxWelcomeComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('orders/OrderModule').then((m) => m.OrderListModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('payments/PaymentModule').then((m) => m.PaymentGatewayModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('products/ProductModule').then((m) => m.ProductListModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('profile/ProfileModule').then((m) => m.WishListModule),
  },
];
