import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { PaymentListComponent } from '../payment-list/payment-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentListComponent,
      },
    ]),
  ],
})
export class PaymentGatewayModule {}
