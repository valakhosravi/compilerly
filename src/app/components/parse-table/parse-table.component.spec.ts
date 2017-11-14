import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseTableComponent } from './parse-table.component';

describe('ParseTableComponent', () => {
  let component: ParseTableComponent;
  let fixture: ComponentFixture<ParseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
