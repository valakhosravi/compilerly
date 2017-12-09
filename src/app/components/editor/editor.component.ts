import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('ep') editorParent;
  text: String = '';
  editorHeight = 312;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.editorHeight = this.editorParent.nativeElement.offsetHeight - 20;
  }

  run() {
    // console.log(this.text);
    this.scanner(this.text);
  }

  scanner(str) {
    const tokens = [];
    let value = '';
    // remove new lines from string
    str = str.replace(/(\r\n|\n|\r)/gm, '');
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      if (str[i] !== ' ') {
        value += str[i];
        if (this.findTokenType(value)) {
          tokens.push({
            value: value,
            type: this.findTokenType(value)
          });
          value = '';
        } else {
          console.log(value);
        }
      } else {
        value = '';
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
      default:
        return false;
    }
  }
}
