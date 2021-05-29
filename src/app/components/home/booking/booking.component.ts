import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingData:any;
  seatAva:any;
  selectedSeat:any;
  constructor(public service:CommonService, public router:Router) {
    this.service.show()
   }

  ngOnInit(): void {
    this.seatAva = this.service.bookFun()
    this.bookingData = JSON.parse(localStorage.getItem("ticketBook") || '{}')
  }
  eventPass(val:any){
    this.selectedSeat = val;
  }
  submitData(){
    console.log(this.bookingData,this.selectedSeat)
    let data = {
      "date":this.bookingData.date,
      "going_to":this.bookingData.going_to,
      "leaving_form":this.bookingData.leaving_form,
      "Amount":this.selectedSeat.Amount,
      "TrainStatus":this.selectedSeat.TrainStatus,
      "Classes":this.selectedSeat.Classes
    }
  localStorage.setItem('booked',JSON.stringify(data))
  this.router.navigate(['home/history'])
  }
}
