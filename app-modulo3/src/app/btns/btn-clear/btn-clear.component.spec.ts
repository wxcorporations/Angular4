import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearComponent } from './btn-clear.component';

describe('BtnClearComponent', () => {
  let component: BtnClearComponent;
  let fixture: ComponentFixture<BtnClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
