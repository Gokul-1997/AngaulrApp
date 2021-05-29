import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  HistoryData:any;
  ArrayVal:any[] = [];
  cancelVal:any[]=[];
  constructor(public service:CommonService) {
    this.service.show()
   this.HistoryData = JSON.parse(localStorage.getItem("booked") || '{}')
   this.ArrayVal.push(this.HistoryData)
   }

  ngOnInit(): void {
  }
  cancelTicket(val:any){
    this.ArrayVal =[];
  this.cancelVal.push(val);
  }
}
