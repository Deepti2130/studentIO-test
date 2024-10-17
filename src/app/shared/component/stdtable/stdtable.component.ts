import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
 @Input() stdsData ! : Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}