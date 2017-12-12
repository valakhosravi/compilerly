import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('ep') editorParent;
  @ViewChild('editor') editor;
  text: String = '';
  editorHeight = 312;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.editorHeight = this.editorParent.nativeElement.offsetHeight - 20;
  }

  run() {
    this.scanner(this.text);
  }

  scanner(str) {
    const tokens = [];
    let value = '';
    // remove new lines, space and tab from string
    str = str.replace(/(\r\n|\n|\r)/gm, '');
    str = str.replace(/\t/g, '');
    str = str.replace(/\s/g, '');
    console.log(str);
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        value += str[i];
        if (this.findTokenType(value)) {
          tokens.push({
            value: value,
            type: this.findTokenType(value)
          });
          value = '';
        } else {
          if (str[i + 1] && this.findTokenType(str[i + 1]) && !this.findTokenType(value)) {
            tokens.push({
              value: value,
              type: 'id'
            });
            value = '';
          }
        }
      } else {
        value = '';
      }
    }
    // find numbers in tokens
    tokens.forEach(t => {
      if (t.type === 'id') {
        if (this.isNumber(t.value)) {
          t.type = 'num';
        }
      }
    });
    // find ++ , == , -- , && and ||
    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i].value === tokens[i - 1].value) {
        tokens[i - 1].value = tokens[i - 1].value + tokens[i - 1].value;
        tokens.splice(i, 1);
      }
    }
    console.log(tokens);
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
}
