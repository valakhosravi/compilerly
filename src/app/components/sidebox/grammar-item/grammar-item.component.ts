import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Rule } from '../../../classes/rule';

@Component({
  selector: 'app-grammar-item',
  templateUrl: './grammar-item.component.html',
  styleUrls: ['./grammar-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GrammarItemComponent implements OnInit {
  @Input() rule: Rule;
  constructor() { }

  ngOnInit() {
  }

}
