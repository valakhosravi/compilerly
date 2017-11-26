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
        }
      } else {
        value = '';
      }
    }
    console.log(tokens);
  }

  findTokenType(value) {
    // console.log(value);
    switch (value) {
      case 'main':
        return 'KW';
      case '(':
        return 'ST';
      case ')':
        return 'ST';
      default:
        return false;
    }
  }
}
