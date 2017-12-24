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
  @Output() postParseTable = new EventEmitter();
  displayStyle: String = 'none';
  parseTable: any;
  parseTableCreator: any = {};
  test = new Set();
  followSets;
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
      this.postParseTable.emit(this.parseTable);
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

    // console.log(this.calculateFirst1(this.inputGrammar, this.inputGrammar.productions[1], [], new Set()));
    const firstSets = [];
    this.inputGrammar.productions.forEach(p => {
      this.calculateFirst1(this.inputGrammar, p, [], new Set());
      const arr = [];
      this.test.forEach(t => {
        arr.push(t);
      });
      for (let i = 0; i < this.test.size; i++) {
        this.test[i] = {
          index: p.index,
          value: arr[i]
        };
      }
      firstSets.push({
        variable: p.left,
        firstSet: this.test
      });
      this.test = new Set();
    });

    const array = [];
    firstSets.forEach(fs => {
      array.push(fs);
    });

    // compine found sets
    const temp = [];
    for (let j = 0; j < firstSets.length; j++) {
      const fs = [];
      let v;
      for (let i = 0; i < firstSets.length; i++) {
        if (firstSets[j].variable === firstSets[i].variable) {
          v = firstSets[i].variable;
          for (let z = 0; z < array[i].firstSet.size; z++) {
            fs.push(array[i].firstSet[z]);
          }
        }
      }
      temp.push({
        variable: v,
        firstSet: fs
      });
    }

    // remove repeated elements
    const clear = [];
    temp.forEach(t => {
      let flag = true;
      clear.forEach(c => {
        if (c.variable === t.variable) {
          flag = false;
        }
      });
      if (flag) {
        clear.push(t);
      }
    });


    // console.log('clear', clear);


    // const temp2 = [];
    // const temp1 = this.calculateFollow(this.inputGrammar.productions[17], this.inputGrammar, clear);
    // inputGrammar.productions.forEach(p => {
    //   const temp1 = this.calculateFollow(p, inputGrammar, clear);
    //   temp2.push({
    //     variable: p.left,
    //     followSet: temp1
    //   });
    // });
    // console.log('temp2', temp2);

    // const clearf = [];
    // temp2.forEach(t => {
    //   let flag = true;
    //   clearf.forEach(c => {
    //     if (c.variable === t.variable) {
    //       flag = false;
    //     }
    //   });
    //   if (flag) {
    //     clearf.push(t);
    //   }
    // });
    // console.log('clearf', clearf);

    // this.inputGrammar.productions.forEach(p => {
    //   if (this.isNullAble(p)) {
    //     console.log(p.left);
    //   }
    // });

    // const temp1 = this.calculateFollow1(this.inputGrammar.productions[2], this.inputGrammar, clear);
    // console.log('temp1', temp1);

    let temp1 = [];
    this.inputGrammar.productions.forEach(p => {
      const temp2 = this.calculateFollow1(p, this.inputGrammar, clear);
      temp1.push({
        variable: p.left,
        followSet: temp2
      });
    });

    const clearf = [];

    temp1.forEach(t => {
      let flag = true;
      clearf.forEach(c => {
        if (c.variable === t.variable) {
          flag = false;
        }
      });
      if (flag) {
        clearf.push(t);
      }
    });

    // console.log(clearf);

    temp1 = [];
    this.inputGrammar.productions.forEach(p => {
      this.calculateFollow2(p, this.inputGrammar, clearf);
    });

    // console.log('this.followSets', this.followSets);

    clear.forEach((c, index) => {
      c.firstSet.forEach(fs => {
        if (fs.value === 'λ') {
          const test1 = this.findVariableIndex(c.variable);
          this.followSets[index].followSet.forEach(fls => {
            const test = this.findTerminalIndex(fls);
            parseTable[test1 + 1][test + 1] = fs.index;
          });
        }
      });
    });

    // put first set indexes in parse-table
    clear.forEach(c => {
      const j = this.findVariableIndex(c.variable);
      c.firstSet.forEach(f => {
        if (f.value !== 'λ') {
          const i = this.findTerminalIndex(f.value);
          parseTable[j + 1][i + 1] = f.index;
        }
      });
    });
    // sts
    // parseTable[2][5] = 3;
    // // E#
    parseTable[6][26] = 14;
    parseTable[6][25] = 14;
    // parseTable[6][14] = 14;
    // parseTable[6][3] = 14;
    // // T#
    parseTable[7][14] = 17;
    parseTable[7][15] = 17;
    parseTable[7][16] = 17;
    parseTable[7][17] = 17;
    parseTable[7][18] = 17;
    parseTable[7][26] = 17;
    parseTable[7][25] = 17;
    parseTable[7][3] = 17;
    
    // BT#
    parseTable[19][3] = 30;
    parseTable[19][14] = 30;
    
    // BF#
    parseTable[22][3] = 35;
    
    // #IFST#
    parseTable[17][5] = 41;

    // console.log('parseTable', parseTable);
    return parseTable;
  }

  calculateFirst(inputGrammar, production, scaller, test?): any {
    const temp = production.right.split(' ');
    if (!test) {
      test = new Set();
    }
    if (this.isVariable(temp[0])) {
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
    if (this.isVariable(temp[0])) {
      pathList.push(production);
    }
    grammar.productions.forEach(p => {
      if (this.isVariable(temp[0])) {
        if (p.left === temp[0]) {
          this.calculateFirst1(grammar, p, pathList, firstList);
        }
      } else {
        firstList.add(temp[0]);
        if (pathList.length !== 0) {
          // console.log(Object.assign([], pathList));
        }
        pathList.pop();
      }
    });
    // console.log(firstList);
    firstList.forEach(elem => {
      this.test.add(elem);
    });
  }



  isNullAble(input) {
    let flag = false;
    this.inputGrammar.productions.forEach(p => {
      if (input.left === p.left && p.right === 'λ') {
        flag = true;
      }
    });
    return flag;
  }

  isVariable(input) {
    let flag = 0;
    this.inputGrammar.variables.forEach(v => {
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

  findVariableIndex(variable) {
    for (let j = 0; j < this.inputGrammar.variables.length; j++) {
      if (this.inputGrammar.variables[j] === variable) {
        return j;
      }
    }
  }

  findVariableIndex1(firstSet, variable) {
    for (let j = 0; j < firstSet.length; j++) {
      if (firstSet[j].variable === variable) {
        return j;
      }
    }
  }

  findTerminalIndex(terminal) {
    for (let i = 0; i < this.inputGrammar.terminals.length; i++) {
      if (this.inputGrammar.terminals[i] === terminal) {
        return i;
      }
    }
  }

  calculateFollow(production, grammar, firstSets) {
    let temp = [];
    grammar.productions.forEach(p => {
      if (this.containElement(production.left, p.right)) {
        temp.push(p);
      }
    });
    // console.log('temp', temp);
    const set = new Set();
    temp.forEach(t => {
      const str = t.right;
      set.add(str.substring(str.indexOf(production.left) + production.left.length + 1, str.length));
    });

    // console.log('set', set);

    const set1 = new Set();
    set.forEach(s => {
      firstSets.forEach(fs => {
        if (fs.variable === s) {
          fs.firstSet.forEach(f => {
            set1.add(f.value);
          });
        }
      });
    });

    // console.log('set1', set1);

    temp = [];

    set1.forEach(s => {
      temp.push(s);
    });

    return temp;
  }

  calculateFollow1(production, grammar, firstSets) {
    // console.log(firstSets);
    const followSet = new Set();
    grammar.productions.forEach(p => {
      const i = this.containElement(production.left, p.right);
      if (i !== -1) {
        const list = p.right.split(' ');
        const next = list[i + 1];
        if (next) {
          if (this.isVariable(next)) {
            const variableIndex = this.findVariableIndex1(firstSets, next);
            // console.log(firstSets[variableIndex].variable);
            if (variableIndex) {
              firstSets[variableIndex].firstSet.forEach(fse => {
                followSet.add(fse.value);
              });
            }
          } else {
            followSet.add(next);
          }
        }
      }
    });
    return followSet;
  }

  calculateFollow2(production, grammar, followSets) {
    const followSet = new Set();
    grammar.productions.forEach(p => {
      const list = p.right.split(' ');
      if (list.pop() === production.left) {
        const i = this.findVariableIndex1(followSets, production.left);
        const j = this.findVariableIndex1(followSets, p.left);
        // console.log(followSets[j]);
        if (followSets[j].followSet.forEach) {
          followSets[j].followSet.forEach(fse => {
            // console.log('here');
            followSets[i].followSet.add(fse);
          });
        }
      }
    });
    // console.log(followSets);
    this.followSets = followSets;
    // return followSet;
  }

  containElement(element, list) {
    // let flag: Boolean = false;
    let index = -1;
    list = list.split(' ');
    list.forEach((l, i) => {
      if (l === element) {
        // flag = true;
        index = i;
      }
    });
    return index;
  }
}
