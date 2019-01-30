import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoReceitasComponent } from './sessao-receitas.component';

describe('SessaoReceitasComponent', () => {
  let component: SessaoReceitasComponent;
  let fixture: ComponentFixture<SessaoReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
