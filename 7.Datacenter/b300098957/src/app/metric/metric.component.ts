import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  constructor() {
  }

  ngOnInit() {
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
