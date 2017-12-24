import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Token } from '../../classes/token';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('ep') editorParent;
  @ViewChild('editor') editor;
  @Input() parseTable;
  @Input() inputGrammar;
  @Output() postMessage = new EventEmitter<any>();
  // @Output() postMessage1 = new EventEmitter<any>();
  text = '';
  ch;
  index = 0;
  lineIndex = 1;
  editorHeight = 312;
  error = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.editorHeight = this.editorParent.nativeElement.offsetHeight - 20;
  }

  run() {
    // const tokens = this.scanner(this.text);
    // this.parser(tokens);
    this.error = false;
    this.lineIndex = 1;
    if (this.text.indexOf('main') === -1) {
      this.postMessage.emit({
        out: 'error',
        message: 'No main method detected'
      });
      return;
    }
    if (this.text.split('main').length - 1 > 1) {
      this.postMessage.emit({
        out: 'error',
        message: 'Only one main method is valid'
      });
      return;
    }
    this.parser1(this.text);
  }


  findTokenType(value) {
    switch (value) {
      case 'main':
        return 'KW';
      case 'int':
        return 'KW';
      case 'float':
        return 'KW';
      case 'char':
        return 'KW';
      case 'double':
        return 'KW';
      case 'while':
        return 'KW';
      case 'do':
        return 'KW';
      case 'if':
        return 'KW';
      case 'for':
        return 'KW';
      case '(':
        return 'ST';
      case ')':
        return 'ST';
      case '{':
        return 'ST';
      case '}':
        return 'ST';
      case '||':
        return 'ST';
      case '&&':
        return 'ST';
      case '<=':
        return 'ST';
      case '>=':
        return 'ST';
      case '++':
        return 'ST';
      case '+':
        return 'ST';
      case '*':
        return 'ST';
      case '=':
        return 'ST';
      case ';':
        return 'ST';
      case '|':
        return 'ST';
      case '&':
        return 'ST';
      case '>':
        return 'ST';
      case '<':
        return 'ST';
      default:
        return false;
    }
  }

  isNumber(str) {
    let flag = true;
    for (let i = 0; i < str.length; i++) {
      if (flag) {
        switch (str[i]) {
          case '1':
            flag = true;
            break;
          case '2':
            flag = true;
            break;
          case '3':
            flag = true;
            break;
          case '4':
            flag = true;
            break;
          case '5':
            flag = true;
            break;
          case '6':
            flag = true;
            break;
          case '7':
            flag = true;
            break;
          case '8':
            flag = true;
            break;
          case '9':
            flag = true;
            break;
          case '0':
            flag = true;
            break;
          default:
            flag = false;
        }
      }
    }
    return flag;
  }

  parser(tokens) {
    let counter = 0;
    const parseStack = [];
    let index = 0;
    parseStack.push('$');
    parseStack.push('P');
    // console.log(this.parseTable);
    while (true) {
      if (counter >= 100) {
        return;
      } else {
        counter++;
      }
      let nextToken = tokens[index];
      if (nextToken.value === '$') {
        nextToken = '$';
      } else {
        if (nextToken.type === 'id' || nextToken.type === 'num') {
          nextToken = nextToken.type;
        } else {
          nextToken = nextToken.value;
        }
      }
      const top_ps = parseStack[parseStack.length - 1];
      // console.log('top_ps', top_ps);
      // console.log('nextToken', nextToken);
      // console.log('parseStack', parseStack);
      // console.log('tokens', tokens);
      // console.log('--------');
      if (this.isVariable(top_ps)) {
        const j = this.findVariableIndex(top_ps) + 1;
        const i = this.findTerminalIndex(nextToken) + 1;
        // console.log(j);
        // console.log(i);
        // console.log(this.parseTable[j][i]);
        // console.log(this.inputGrammar.productions[+this.parseTable[j][i] - 1]);
        let vars = this.inputGrammar.productions[+this.parseTable[j][i] - 1].right;
        if (vars === 'λ') {
          parseStack.pop();
        } else {
          parseStack.pop();
          vars = vars.split(' ');
          vars = vars.reverse();
          vars.forEach(v => {
            parseStack.push(v);
          });
        }
      } else if (top_ps === '$') {
        if (nextToken === '$') {
          // console.log('Accept');
          return;
        }
      } else if (!this.isVariable(top_ps)) {
        if (top_ps === nextToken) {
          parseStack.pop();
          index++;
        } else {
          // console.log('error');
        }
      }
      // return;
    }
  }

  findVariableIndex(variable) {
    for (let j = 0; j < this.inputGrammar.variables.length; j++) {
      if (this.inputGrammar.variables[j] === variable) {
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

  isVariable(input) {
    let flag = false;
    // console.log(this.inputGrammar);
    this.inputGrammar.variables.forEach(v => {
      // console.log(input);
      // console.log(v);
      if (v === input) {
        flag = true;
      }
    });
    return flag;
  }

  parser1(text) {
    this.index = 0;
    this.read();
    let token;
    const tokens = [];
    const parseStack = [];
    parseStack.push('$');
    parseStack.push('P');
    // while (this.index <= this.text.length && !this.error) {
    token = this.scanner1();
    while (true) {
      const top_ps = parseStack[parseStack.length - 1];
      // console.log(top_ps);
      // console.log(token);
      if (parseStack.length === 1) {
        // console.log(2);
        if (token.value && token.value === '$') {
          console.log('Accept');
          this.postMessage.emit({
            out: 'parser',
            message: 'Code parsed successfully ✌️'
          });
          break;
        } else {
          this.postMessage.emit({
            out: 'error',
            message: 'Invalid code outside of main scope'
          });
          break;
        }
      }
      if (token) {
        console.log(
          token,
          parseStack
        );
        // console.log('token.value', token.value);
        tokens.push(token);
        if (token.type === 'id') {
          token.value = 'id';
        }
        if (token.type === 'num') {
          token.value = 'num';
        }
        if (this.isVariable(top_ps)) {
          // console.log(1);
          const j = this.findVariableIndex(top_ps) + 1;
          const i = this.findTerminalIndex(token.value) + 1;
          if (this.parseTable[j][i] === 0) {
            this.postMessage.emit({
              out: 'error',
              message: 'Invalid expression found in line: ' + this.lineIndex
            });
            break;
          }
          // console.log('ParseTable', this.parseTable[j][i]);
          let vars = this.inputGrammar.productions[+this.parseTable[j][i] - 1].right;
          if (vars === 'λ') {
            parseStack.pop();
          } else {
            parseStack.pop();
            vars = vars.split(' ');
            vars = vars.reverse();
            vars.forEach(v => {
              parseStack.push(v);
            });
          }
        } else {
          // console.log(3);
          if (top_ps === token.value) {
            parseStack.pop();
            token = this.scanner1();
            continue;
          }
          // console.log('error');
          this.postMessage.emit({
            out: 'error',
            message: '\"' + top_ps + '\" expected but token is \"' + token.value + '\" in line: ' + this.lineIndex
          });
          break;
        }
      } else {
        // console.log('else');
        token = this.scanner1();
      }
    }
    // console.log('tokens', tokens);
    // if (!this.error) {
    //   this.postMessage.emit({
    //     out: 'scanner',
    //     value: tokens
    //   });
    // }
  }

  scanner1() {
    // tslint:disable-next-line:prefer-const
    let token = new Token();
    while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n') {
      if (this.ch === '\n') {
        this.lineIndex++;
      }
      this.read();
    }

    if (!this.ch) {
      token.type = 'end';
      token.value = '$';
      return token;
    }

    if (this.ch === '(') {
      token.type = 'ST';
      token.value = '(';
      this.read();
      return token;
    }
    if (this.ch === ')') {
      token.type = 'ST';
      token.value = ')';
      this.read();
      return token;
    }
    if (this.ch === '{') {
      token.type = 'ST';
      token.value = '{';
      this.read();
      return token;
    }
    if (this.ch === '}') {
      token.type = 'ST';
      token.value = '}';
      this.read();
      return token;
    }
    if (this.ch === ';') {
      token.type = 'ST';
      token.value = ';';
      this.read();
      return token;
    }
    if (this.ch === '*') {
      token.type = 'ST';
      token.value = '*';
      this.read();
      return token;
    }
    if (this.ch === '+') {
      token.type = 'ST';
      token.value = '+';
      this.read();
      if (this.ch === '+') {
        token.value = '++';
        this.read();
      }
      return token;
    }
    if (this.ch === '=') {
      token.type = 'ST';
      token.value = '=';
      this.read();
      if (this.ch === '=') {
        token.value = '==';
        this.read();
      }
      return token;
    }
    if (this.ch === '<') {
      this.read();
      if (this.ch === '=') {
        token.type = 'ST';
        token.value = '<=';
        this.read();
      }
      return token;
    }
    if (this.ch === '>') {
      this.read();
      if (this.ch === '=') {
        token.type = 'ST';
        token.value = '>=';
        this.read();
      }
      return token;
    }
    if (this.ch === '&') {
      this.read();
      if (this.ch === '&') {
        token.type = 'ST';
        token.value = '&&';
        this.read();
      }
      return token;
    }
    if (this.ch === '|') {
      this.read();
      if (this.ch === '|') {
        token.type = 'ST';
        token.value = '||';
        this.read();
      }
      return token;
    }
    if (this.isLetter(this.ch)) {
      let value = this.ch;
      this.read();
      while (this.isLetter(this.ch)) {
        value = value + this.ch;
        this.read();
        // console.log(this.ch);
        if (this.ch !== ';' && this.ch !== '=' && this.ch !== ')' && this.ch !== '(' && this.ch !== ' ' &&
          this.ch !== '\t' && this.ch !== '\n' && !this.isLetter(this.ch)) {
          this.error = true;
          this.postMessage.emit({
            out: 'error',
            message: 'Invalid identifire in line : ' + this.lineIndex
          });
          return;
        }
      }
      if (this.ch !== ';' && this.ch !== '=' && this.ch !== ')' && this.ch !== '(' && this.ch !== ' ' &&
        this.ch !== '*' && this.ch !== '+' && this.ch !== '\t' && this.ch !== '\n' && !this.isLetter(this.ch)) {
        this.error = true;
        this.postMessage.emit({
          out: 'error',
          message: 'Invalid identifire declaration in line : ' + this.lineIndex
        });
        return;
      }
      token.type = 'id';
      token.value = value;
      if (this.isKeyWord(value) !== 'false') {
        token.type = 'KW';
      }
      return token;
    }
    if (this.isNumber(this.ch)) {
      let num = this.ch;
      this.read();
      while (this.isNumber(this.ch) || this.ch === '.') {
        num = num + this.ch;
        this.read();
      }
      token.type = 'num';
      token.value = num;
      return token;
    }
    if (this.ch === '/') {
      this.read();
      if (this.ch === '/') {
        this.read();
        while (this.ch !== '\n') {
          this.read();
        }
        // return;
      }
      // else if (this.ch === '*') {
      //   console.log(1);
      //   this.read();
      //   while (true) {
      //     if (this.ch) {
      //       if (this.ch === '*') {
      //         this.read();
      //         console.log(this.ch);
      //         if (this.ch === '/') {
      //           console.log(3);
      //           return;
      //           console.log(3);
      //         }
      //       }
      //       this.read();
      //     } else {
      //       this.error = true;
      //       this.postMessage.emit({
      //         out: 'error',
      //         message: 'Invalid comment format'
      //       });
      //     }
      //   }
      // }
      else {
        this.error = true;
        this.postMessage.emit({
          out: 'error',
          message: 'Invalid comment format'
        });
      }
    }
    // console.log(this.ch);
    this.read();
    // console.log(this.ch);
    this.error = true;
    this.postMessage.emit({
      out: 'error',
      message: 'Invalid symbol found in line : ' + this.lineIndex
    });
  }

  read() {
    this.ch = this.text[this.index];
    this.index++;
  }

  isLetter(ch) {
    let flag = false;
    if (ch) {
      if (65 <= ch.charCodeAt(0) && 90 >= ch.charCodeAt(0)) {
        flag = true;
      }
      if (97 <= ch.charCodeAt(0) && 122 >= ch.charCodeAt(0)) {
        flag = true;
      }
    }
    return flag;
  }

  isKeyWord(str) {
    switch (str) {
      case 'main':
        return 'main';
      case 'int':
        return 'int';
      case 'float':
        return 'float';
      case 'double':
        return 'double';
      case 'char':
        return 'char';
      case 'for':
        return 'for';
      case 'while':
        return 'while';
      case 'do':
        return 'do';
      case 'if':
        return 'if';
      case 'else':
        return 'else';
      default:
        return 'false';
    }
  }
}
