import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-input-property-decorator
})
export class ConsoleComponent implements OnInit {
  @Input() messages: any[];
  constructor() { }

  ngOnInit() {
  }

}
