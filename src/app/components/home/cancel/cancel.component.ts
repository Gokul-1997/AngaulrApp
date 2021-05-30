import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {
  cancelData:any;
  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.service.cancelGet().subscribe(res =>{
      this.cancelData = res;
    })

  }

}
