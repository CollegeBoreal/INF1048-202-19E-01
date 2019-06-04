import {Component, OnInit} from '@angular/core';
import {StockInterface} from '../../services/stock-interface';
import {StocksService} from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
  }

  ngOnInit() {
    this.symbols = this.service.get();
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
