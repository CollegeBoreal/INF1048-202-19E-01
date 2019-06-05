import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent implements OnInit {

  @Input() node;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  getType(prop) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }

}
