import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoCompraComponent } from './sessao-compra.component';

describe('SessaoCompraComponent', () => {
  let component: SessaoCompraComponent;
  let fixture: ComponentFixture<SessaoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
