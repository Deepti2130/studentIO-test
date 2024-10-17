import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
stdArr:Array<Istd> = [
  {
    fname:"Deepti",
    lname:"Jadhav",
    email:"deepti33@gmail.com",
    contact:9767506354,
    isActive:"active"
  },
  {
    fname:"Neeta",
    lname:"Patil",
    email:"neet3@gmail.com",
    contact:7867555354,
    isActive:"In-active"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  ongetstd(std:Istd){
    this.stdArr.push(std)
  }

}
