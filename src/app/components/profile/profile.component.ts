import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public service:CommonService) {
    this.service.show()

   }

  ngOnInit(): void {
  }

}
