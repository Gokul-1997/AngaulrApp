import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyData:any;
  bookingData:any;
  constructor(public service:CommonService) {
    this.service.show()
    this.bookingData = JSON.parse(localStorage.getItem("ticketBook") || '{}')
console.log(this.bookingData)
   }

  ngOnInit(): void {
    this.service.historyGet().subscribe(res =>{
      this.historyData = res;
    })
  }
  cancelTicket(val:any){
    let dataval ={
      "Classes":val.Classes,
      "TrainStatus":val.TrainStatus,
      "Amount":val.Amount,
    }
    let dataof = {
      "Classes":val.Classes,
      "TrainStatus":val.TrainStatus,
      "Amount":val.Amount,
      "date":this.bookingData.date,
      "going_to":this.bookingData.going_to,
      "leaving_form":this.bookingData.leaving_form
    }
    this.service.cancelTicket(dataof).subscribe(res =>{

    })
    this.service.bookUpdate(val.id,dataval).subscribe(res =>{
     this.ngOnInit()
    })

  }
}
