import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CarteiraService } from 'src/app/services/carteira.service';
import { InvestimentoModel } from 'src/app/pages/carteira/model/investimento.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tabela-investimento',
  templateUrl: './tabela-investimento.component.html',
  styleUrls: ['./tabela-investimento.component.scss'],
})
export class TabelaInvestimentoComponent implements OnInit {
  @Input() dataSource: InvestimentoModel[] = [];
  @Output() changes = new EventEmitter<any>();
  public displayedColumns: string[] = ['tipo', 'data', 'valor', 'deletar'];
  constructor(private carteiraService: CarteiraService) {}

  ngOnInit(): void {}

  deletarInvestimento(id: string): void {
    this.carteiraService
      .excluirInvestimento(id)
      .pipe(
        tap({
          next: () => {
            this.changes.emit();
          },
        })
      )
      .subscribe();
  }
}
