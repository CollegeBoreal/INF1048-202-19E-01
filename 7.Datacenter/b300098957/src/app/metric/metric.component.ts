import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit, OnChanges {

  @Input('used') value = 0;
  @Input('available') max = 100;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) { this.value = 0; }
    if (changes.max && isNaN(changes.max.currentValue)) { this.max = 0; }
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
