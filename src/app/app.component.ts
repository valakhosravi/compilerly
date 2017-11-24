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
  showParseTable(e) {
    this.parseTableDisplay = true;
  }

  hideParseTable(e) {
    this.parseTableDisplay = false;
  }

  getRHST(e) {
    this.productions = e;
  }
}
