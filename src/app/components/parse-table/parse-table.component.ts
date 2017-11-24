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
  @Input() RHST: Production[];
  @Output() parseTableStatus = new EventEmitter();
  displayStyle: String = 'none';
  parseTable: any;
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
    if (changes.RHST) {
      console.log(changes.RHST.currentValue);
      this.parseTable = this.makeParseTable(changes.RHST.currentValue);
    }
  }

  hideBlock() {
    this.parseTableStatus.emit(false);
  }

  makeParseTable(RHST: Production[]) {
    // tslint:disable-next-line:prefer-const
    let parseTable;
    // tslint:disable-next-line:prefer-const
    let variables: String[] = [];
    // tslint:disable-next-line:prefer-const
    let terminals: String[] = [];
    RHST.forEach(pr => {
      if (!variables.includes(pr.left)) {
        variables.push(pr.left);
      }
    });
    console.log(variables);
    let temps = [];
    RHST.forEach(pr => {
      variables.forEach(v => {
        let temp;
        temp = pr.right;
        if (v.indexOf('#') !== -1 && temp.indexOf(v) !== -1) {
          console.log('1');
          console.log('\n\n' + temp);
          // const temp2 =  '/' + v + '/g';
          // console.log('1*');
          // console.log('\n\n' + temp2);
          temp = temp.replace(v, '');
          // temp.split(v).join('');
          console.log('2');
          console.log('\n\n' + temp);
          temps.push(temp);
        }
        // console.log(variables.length);
      });
    });
    // RHST.forEach(pr => {
    //   variables.forEach(v => {
    //     let temp;
    //     temp = pr.right;
    //     if (temp.indexOf(v) !== -1) {
    //       console.log('1*');
    //       console.log('\n\n' + temp);
    //       // const temp2 =  '/' + v + '/g';
    //       // console.log('1*');
    //       // console.log('\n\n' + temp2);
    //       temp = temp.replace(v, '');
    //       // temp.split(v).join('');
    //       console.log('2*');
    //       console.log('\n\n' + temp);
    //       temps.push(temp);
    //     }
    //     // console.log(variables.length);
    //   });
    // });
    console.log(temps);
    return parseTable;
  }
}
