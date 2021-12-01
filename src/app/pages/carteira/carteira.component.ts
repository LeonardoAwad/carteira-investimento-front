import { Component, OnInit } from "@angular/core";

import { CarteiraService } from "src/app/services/carteira.service";
import { InvestimentoModel } from "./model/investimento.model";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-carteira",
  templateUrl: "./carteira.component.html",
  styleUrls: ["./carteira.component.scss"],
})
export class CarteiraComponent implements OnInit {
  public colorScheme = {
    domain: [],
  };

  public doughnutChartType = "doughnut";

  public listaInvestimentos: InvestimentoModel[] = [];
  public loaded = false;
  public form: InvestimentoModel = new InvestimentoModel();

  public mode = "simples";

  constructor(private carteiraService: CarteiraService) {}

  ngOnInit(): void {
    this.buscarInvestimento();
  }

  public criarInvestimento(): void {
    this.carteiraService
      .criarInvestimento(this.form)
      .pipe(
        tap({
          next: () => {
            this.form = new InvestimentoModel();
            this.buscarInvestimento();
          },
          complete: () => {},
        })
      )
      .subscribe(() => {});
  }

  public buscarInvestimento(): void {
    this.carteiraService
      .buscarInvestimentos()
      .pipe(
        tap({
          next: (result) => {
            this.listaInvestimentos = result;
          },
          complete: () => {
            this.loaded = true;
          },
        })
      )
      .subscribe();
  }

  public formValid(): boolean {
    if (this.form.date && this.form.type && this.form.value) {
      return false;
    }

    return true;
  }
}
