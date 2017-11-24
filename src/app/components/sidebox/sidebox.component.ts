import { ProductionComponent } from './production/production.component';
import { Production } from './../../classes/rule';
import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SBUCSGrammar } from './test-grammars';
@Component({
  selector: 'app-sidebox',
  templateUrl: './sidebox.component.html',
  styleUrls: ['./sidebox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideboxComponent implements OnInit, AfterViewInit {
  @ViewChildren('cmp') components: QueryList<ProductionComponent>;
  @Output() parseTableStatus: EventEmitter<any> = new EventEmitter();
  @Output() postRHST: EventEmitter<any> = new EventEmitter();
  counter = 1;
  productions: Production[] = [];

  constructor() { }

  ngOnInit() {
    this.productions = SBUCSGrammar.productions;
    this.productions = this.indexInputGrammar(this.productions);
    SBUCSGrammar.productions = this.productions;
    this.postRHST.emit(SBUCSGrammar);
  }

  ngAfterViewInit() {
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

  indexInputGrammar(productions: Production[]) {
    for (let i = 0; i < this.productions.length; i++) {
      productions[i].index = i + 1;
      // productions[i].left = productions[i].left.replace(/(['"])/g, '#');
      // productions[i].right = productions[i].right.replace(/(['"])/g, '#');
    }
    return productions;
  }

}
