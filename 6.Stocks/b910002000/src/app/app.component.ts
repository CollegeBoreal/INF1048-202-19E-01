import { Component } from '@angular/core';
import {StocksService} from './services/stocks.service';
import {StockInterface} from './services/stock-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['JMIA']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}

