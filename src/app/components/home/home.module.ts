import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';
import { CancelComponent } from './cancel/cancel.component';


@NgModule({
  declarations: [HomeComponent, BookingComponent, HistoryComponent,CancelComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
