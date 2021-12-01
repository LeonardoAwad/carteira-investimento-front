import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaInvestimentoComponent } from './tabela-investimento.component';

describe('TabelaInvestimentoComponent', () => {
  let component: TabelaInvestimentoComponent;
  let fixture: ComponentFixture<TabelaInvestimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaInvestimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
