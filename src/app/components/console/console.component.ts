import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
// import { Input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-input-property-decorator
})
export class ConsoleComponent implements OnInit, OnChanges {
  @Input() smessages;
  messages: any = {};
  @Input() pmessages: any[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.smessages.firstChange) {
      this.messages = changes.smessages.currentValue;
      console.log(this.messages);
    }
  }
}
