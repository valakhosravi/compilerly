import { ProductionComponent } from './production/production.component';
import { Production } from './../../classes/rule';
import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ArithmeticGrammar } from './test-grammars';
@Component({
  selector: 'app-sidebox',
  templateUrl: './sidebox.component.html',
  styleUrls: ['./sidebox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideboxComponent implements OnInit, AfterViewInit {
  @ViewChildren('cmp') components: QueryList<ProductionComponent>;
  @Output() parseTableStatus: EventEmitter<any> = new EventEmitter();
  counter = 1;
  productions: Production[] = [];

  constructor() { }

  ngOnInit() {
    // for (let i = 0; i < 10; i++) {
    //   this.add();
    // }
    this.productions = ArithmeticGrammar;
    for (let i = 0; i < this.productions.length; i++) {
      this.productions[i].index = i + 1;
    }
  }

  ngAfterViewInit() {
    console.log(this.components);
  }

  add() {
    this.productions.push({
      index: this.counter,
      left: '-' + this.counter,
      right: '+' + this.counter,
    });
    this.counter += 1;
  }

  showParseTable() {
    this.parseTableStatus.emit(true);
  }

}
