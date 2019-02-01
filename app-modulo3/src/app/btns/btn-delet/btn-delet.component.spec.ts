import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeletComponent } from './btn-delet.component';

describe('BtnDeletComponent', () => {
  let component: BtnDeletComponent;
  let fixture: ComponentFixture<BtnDeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
