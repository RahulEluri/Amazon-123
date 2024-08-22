import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,
    RouterModule.forChild([{
      path: '',
      component: AppComponent
    }])
  ],
  exports:[AppComponent]
})
export class OrderListModule { }
