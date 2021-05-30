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
   this.service.bookFun().subscribe(res =>{
    this.seatAva = res;
    })
    this.bookingData = JSON.parse(localStorage.getItem("ticketBook") || '{}')
  }
  eventPass(val:any){
    this.selectedSeat = val;
  }
  submitData(){
    let dataval ={
      "Classes":this.selectedSeat.Classes,
      "TrainStatus":this.selectedSeat.TrainStatus,
      "Amount":this.selectedSeat.Amount,
      "Status":true
    }
    this.service.bookUpdate(this.selectedSeat.id,dataval).subscribe(res =>{
      console.log(res)
    })
  this.router.navigate(['home/history'])
  }
}
