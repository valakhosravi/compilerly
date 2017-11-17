import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Production } from '../../../classes/rule';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductionComponent implements OnInit {
  @Input() production: Production;
  constructor() { }

  ngOnInit() {
  }

}
