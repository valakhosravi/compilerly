import { Production } from './classes/rule';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parseTableDisplay: Boolean = false;
  productions: Production[];
  smessage = [];
  pmessage = [];
  parseTable = [];
  showParseTable(e) {
    this.parseTableDisplay = true;
  }

  hideParseTable(e) {
    this.parseTableDisplay = false;
  }

  getRHST(e) {
    this.productions = e;
  }

  getMessage(msg) {
    this.smessage = msg;
  }

  getMessage1(msg) {
    this.pmessage = msg;
  }

  getParseTable(ps) {
    this.parseTable = ps;
  }
}
