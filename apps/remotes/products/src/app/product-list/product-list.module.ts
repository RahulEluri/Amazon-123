import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProListComponent } from '../pro-list/pro-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProListComponent,
    RouterModule.forChild([
      {
        path: '',
        component: ProListComponent,
      },
    ]),
  ],
})
export class ProductListModule {}
