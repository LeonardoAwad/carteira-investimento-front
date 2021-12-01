import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DatePipe } from '@angular/common';
import { GraficoModel } from './models/grafico.model';
import { InvestimentoModel } from 'src/app/pages/carteira/model/investimento.model';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
})
export class GraficosComponent implements OnChanges {
  @Input() listaInvestimentos: InvestimentoModel[] = [];
  @Input() elementReference!: HTMLDivElement;
  @Input() mode: string = '';

  data: GraficoModel[] = [];
  forDate!: GraficoModel[];
  colorScheme: any = {
    domain: [],
  };
  legendPosition = LegendPosition;

  constructor(public datepipe: DatePipe) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.listaInvestimentos) {
      return;
    }
    this.configurarGrafico();
  }

  private configurarGrafico(): void {
    this.data = [];
    this.forDate = [];

    for (let i = 0; i < this.listaInvestimentos.length; i++) {
      this.data.push({
        name: `Renda ${
          this.listaInvestimentos[i].type == 2 ? 'Fixa' : 'Variavel'
        }`,
        value: this.listaInvestimentos[i].value,
      });

      const forDateModel = {
        name: this.datepipe.transform(
          this.listaInvestimentos[i].date,
          'dd/MM/yyyy'
        ),
        value: this.listaInvestimentos[i].value,
      };
      this.forDate.push(forDateModel);

      switch (this.mode) {
        case 'detalhado':
          this.colorScheme.domain.push(
            'rgb(16, 192, 198)',
            'rgb(255, 215, 64, 0.99)'
          );
          break;
        case 'data':
          this.colorScheme.domain.push(this.gerarCor(i));
          break;
        case 'simples':
          this.colorScheme.domain.push(
            'rgb(16, 192, 198)',
            'rgb(255, 215, 64, 0.99)'
          );
          break;
      }
    }
  }

  private gerarCor(i: number): string {
    return this.listaInvestimentos[i].type == 2
      ? `rgb(16, 194, ${255 - i * 5}, 0.90)`
      : `rgb(255, 215, ${64 + i * 2}, 0.${99 - i})`;
  }
}
