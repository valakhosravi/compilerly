import { GrammarItemComponent } from './grammar-item/grammar-item.component';
import { Rule } from './../../classes/rule';
import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebox',
  templateUrl: './sidebox.component.html',
  styleUrls: ['./sidebox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideboxComponent implements OnInit, AfterViewInit {
  @ViewChildren('cmp') components: QueryList<GrammarItemComponent>;
  @Output() parseTableStatus: EventEmitter<any> = new EventEmitter();
  counter = 1;
  rules: Rule[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.add();
    }
  }

  ngAfterViewInit() {
    console.log(this.components);
  }

  add() {
    this.rules.push({
      index: this.counter,
      variable: '',
      production: '',
    });
    this.counter += 1;
  }

  showParseTable() {
    this.parseTableStatus.emit(true);
  }

}
