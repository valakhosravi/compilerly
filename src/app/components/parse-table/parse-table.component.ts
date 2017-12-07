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
  parseTableCreator: any = {};
  test = new Set();
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
    parseTable[0][0] = '';
    for (let j = 1; j < vLength + 1; j++) {
      parseTable[j][0] = inputGrammar.variables[j - 1];
    }
    for (let i = 1; i < tLength + 1; i++) {
      parseTable[0][i] = inputGrammar.terminals[i - 1];
    }

    // this.calculateFirst1(this.inputGrammar, this.inputGrammar.productions[1], [], []);
    console.log('first set');
    console.log(this.calculateFirst1(this.inputGrammar, this.inputGrammar.productions[1], [], new Set()));
    console.log('after');
    console.log(this.test);

    return parseTable;
  }

  calculateFirst(inputGrammar, production, scaller, test?): any {
    const temp = production.right.split(' ');
    if (!test) {
      test = new Set();
    }
    if (this.isVariable(this.inputGrammar, temp[0])) {
      inputGrammar.forEach(p => {
        if (temp[0] === p.left) {
          return this.calculateFirst(inputGrammar, p, scaller, test);
        }
      });
    } else {
      test.add({
        index: production.index,
        terminal: temp[0]
      });
      if (this.parseTableCreator[scaller]) {
        test.forEach(t => {
          this.parseTableCreator[scaller].push(t);
        });
      } else {
        this.parseTableCreator[scaller] = Object.assign([], test);
      }
    }
  }

  calculateFirst1(grammar, production, pathList, firstList) {
    const temp: string[] = production.right.split(' ');
    if (this.isVariable(grammar, temp[0])) {
      pathList.push(production);
    }
    grammar.productions.forEach(p => {
      if (this.isVariable(grammar, temp[0])) {
        if (p.left === temp[0]) {
          this.calculateFirst1(grammar, p, pathList, firstList);
        }
      } else {
        firstList.add(temp[0]);
        pathList.pop();
      }
    });
    console.log(firstList);
    firstList.forEach(elem => {
      this.test.add(elem);
    });
  }



  isNullAble(inputGrammar, input) {
    let flag = false;
    inputGrammar.productions.forEach(p => {
      if (input.left === p.left && p.right === 'λ') {
        flag = true;
      }
    });
    return flag;
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
