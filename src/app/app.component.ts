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
  message = [];
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
    console.log('msg');
    console.log(msg);
    this.message = msg;
  }
}
