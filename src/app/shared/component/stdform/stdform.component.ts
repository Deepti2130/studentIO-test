import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
 @Output() stdEmiter: EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }


  onstdgetdata(stdform:NgForm){
  console.log(stdform.value);
  this.stdEmiter.emit(stdform.value)
  stdform.reset()
  }
}
