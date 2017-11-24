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
}
