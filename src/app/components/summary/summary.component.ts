import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() 
  stock: any;

  constructor() { }

  ngOnInit() {
  }

  isNegative() {
    return this.stock && this.stock.change < 0;
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }
}
