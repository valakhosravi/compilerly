import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  helpDisplay: String = 'none';
  constructor() { }

  ngOnInit() {
  }

  showHelp() {
    this.helpDisplay = 'block';
  }

  hideHelp() {
    this.helpDisplay = 'none';
  }

}
