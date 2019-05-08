import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stocks: StockInterface[];
  symbols: string[];

  constructor(private service: StocksService) { 
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
