import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'book',
    component:BookingComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path:'cancel',
    component:CancelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
