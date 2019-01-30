import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoReceitaComponent } from './descricao-receita.component';

describe('DescricaoReceitaComponent', () => {
  let component: DescricaoReceitaComponent;
  let fixture: ComponentFixture<DescricaoReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
