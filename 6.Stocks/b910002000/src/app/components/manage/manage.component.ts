import { Component, OnInit } from '@angular/core';
import {StocksService} from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  stock: string;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = this.service.get();
  }

  ngOnInit() {
  }

}
