import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toolbar: boolean = false;
  SeatsAva = [
    {
      "Classes":"Sleeper",
       "Amount":900,
       "TrainStatus":'Train Departed'
    },
    {
      "Classes":"AC 3 Tier",
       "Amount":2605,
       "TrainStatus":'Train Departed'
    },
    {
      "Classes":"AC 2 Tier",
       "Amount":4375,
       "TrainStatus":'Train Departed'
    },
    {
      "Classes":"AC 3 Tier",
       "Amount":5380,
       "TrainStatus":'Train Departed'
    }
  ]
  constructor(private http:HttpClient) { }
  show(){
    this.toolbar = true;
  }
  hide(){
    this.toolbar = false;
  }
  allStationGet(){
    return this.http.get('trainStations')
  }
  bookFun(){
    return this.SeatsAva;
  }

}
