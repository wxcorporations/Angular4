import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelMenuCompraComponent } from './painel-menu-compra.component';

describe('PainelMenuCompraComponent', () => {
  let component: PainelMenuCompraComponent;
  let fixture: ComponentFixture<PainelMenuCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelMenuCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelMenuCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
