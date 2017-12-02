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
    // tslint:disable-next-line:max-line-length
    // console.log(this.calculateFirst(this.inputGrammar.productions, this.inputGrammar.productions[1], this.inputGrammar.productions[1].left));
    // this.inputGrammar.productions.forEach(p => {
    //   this.calculateFirst(this.inputGrammar.productions, p, p.left);
    // });
    // console.log(this.parseTableCreator);
    // -- calculting first set

    // while (Object.keys(this.parseTableCreator).length !== this.inputGrammar.variables.length) {
    let temp = '';
    this.inputGrammar.productions.forEach(p => {
      temp = p.right.split(' ');
      if (!this.isVariable(this.inputGrammar, temp[0])) {
        if (!this.parseTableCreator[p.left]) {
          this.parseTableCreator[p.left] = new Set();
        }
        this.parseTableCreator[p.left].add({
          index: p.index,
          terminal: temp[0]
        });
      }
      // else {
      //   this.inputGrammar.productions.forEach(p1 => {
      //     if (p1.left === temp[0] && this.parseTableCreator[temp[0]]) {
      //       console.log('object');
      //       console.log(p1);
      //       console.log(this.parseTableCreator);
      //       console.log('---');
      //       if (!this.parseTableCreator[p1.left]) {
      //         this.parseTableCreator[p1.left] = new Set();
      //       }
      //       this.parseTableCreator[temp[0]].forEach(elem => {
      //         this.parseTableCreator[p1.left].add(elem);
      //       });
      //     }
      //   });
      // }
    });
    // break;
    // }

    this.inputGrammar.productions.forEach(p => {
      temp = p.right.split(' ');
      if (this.isVariable(this.inputGrammar, temp[0])) {
        // if ()
        if (this.parseTableCreator[temp[0]]) {
          this.parseTableCreator[temp[0]].forEach(elem => {
            if (!this.parseTableCreator[p.left]) {
              this.parseTableCreator[p.left] = new Set();
            }
            this.parseTableCreator[p.left].add(elem);
          });
        }
      }
    });

    this.inputGrammar.productions.forEach(p => {
      temp = p.right.split(' ');
      if (this.isVariable(this.inputGrammar, temp[0])) {
        if (this.parseTableCreator[temp[0]]) {
          this.parseTableCreator[temp[0]].forEach(elem => {
            if (!this.parseTableCreator[p.left]) {
              this.parseTableCreator[p.left] = new Set();
            }
            this.parseTableCreator[p.left].add(elem);
          });
        }
      }
    });

    console.log(this.parseTableCreator);
    console.log(Object.keys(this.parseTableCreator).sort());
    console.log(Object.keys(this.parseTableCreator).length);
    console.log(this.inputGrammar.variables.sort());
    console.log(this.inputGrammar.variables.length);
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

  calculateFirst1(grammar, production) {
    // const temp = production.right.split(' ');
    // if (this.isVariable(grammar, temp[0])) {
    //   grammar.productions.forEach(p => {
    //     if (temp[0] === p.left) {
    //       return this.calculateFirst1(grammar, p);
    //     } else {
    //       return 0;
    //     }
    //   });
    // } else {
    //   console.log(temp[0]);
    //   return temp[0];
    // }
    // let test  = production;
    // const list = [];
    // const targets = [];
    // const temp = test.right.split(' ');
    // while (this.isVariable(grammar, temp[0])) {
    //   grammar.productions.forEach(p => {
    //     if (temp[0] === p.left) {
    //       targets.push(p);
    //     }
    //   });

    // }
    // list.push(temp[0]);
    // return list;
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
