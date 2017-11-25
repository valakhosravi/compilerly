import { Production } from './../../classes/rule';
import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-parse-table',
  templateUrl: './parse-table.component.html',
  styleUrls: ['./parse-table.component.css'],
  animations: [
    trigger('moveState', [
      state('none', style({
        transform: 'translateX(-100%)'
      })),
      state('block', style({
        transform: 'translateX(0)'
      })),
      transition('block => none', animate('300ms ease-out')),
      transition('none => block', animate('300ms ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class ParseTableComponent implements OnInit, OnChanges {

  @Input() display: Boolean;
  @Input() inputGrammar;
  @Output() parseTableStatus = new EventEmitter();
  displayStyle: String = 'none';
  parseTable: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.display) {
      if (this.display) {
        this.displayStyle = 'block';
      } else {
        this.displayStyle = 'none';
      }
    }
    if (changes.inputGrammar) {
      this.parseTable = this.makeParseTable(changes.inputGrammar.currentValue);
    }
  }

  hideBlock() {
    this.parseTableStatus.emit(false);
  }

  makeParseTable(inputGrammar) {
    const vLength = inputGrammar.variables.length;
    const tLength = inputGrammar.terminals.length;
    const parseTable = [];
    for (let j = 0; j < vLength + 1; j++) {
      parseTable[j] = [];
      for (let i = 0; i < tLength + 1; i++) {
        parseTable[j][i] = 0;
      }
    }
    for (let j = 1; j < vLength + 1; j++) {
      parseTable[j][0] = inputGrammar.variables[j - 1];
    }
    for (let i = 1; i < tLength + 1; i++) {
      parseTable[0][i] = inputGrammar.terminals[i - 1];
    }
    // this.calculateFirst(inputGrammar, 'P');
    this.calculateFirst(inputGrammar, 'STS');
    return parseTable;
  }

  calculateFirst(inputGrammar, input) {
    // console.log(input);
    const firstSet = [];
    input = input.split(' ');
    if (this.isVariable(inputGrammar, input[0])) {
      inputGrammar.productions.forEach(p => {
        if (p.left === input[0]) {
          // console.log(p.index);
          this.calculateFirst(inputGrammar, p.right);
        }
      });
    } else {
      console.log('---');
      console.log(input[0]);
    }
  }

  isVariable(inputGrammar, input) {
    let flag = 0;
    inputGrammar.variables.forEach(v => {
      if (v === input && flag !== 1) {
        flag = 1;
      }
    });
    if (flag === 1) {
      return true;
    } else {
      return false;
    }
  }
}
