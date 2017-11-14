import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarItemComponent } from './grammar-item.component';

describe('GrammarItemComponent', () => {
  let component: GrammarItemComponent;
  let fixture: ComponentFixture<GrammarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
