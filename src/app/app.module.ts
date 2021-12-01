import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarteiraComponent } from './pages/carteira/carteira.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { GraficosComponent } from './components/graficos/graficos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { MaterialExampleModule } from './material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TabelaInvestimentoComponent } from './components/tabela-investimento/tabela-investimento.component';

@NgModule({
  declarations: [
    LoginComponent,
    CarteiraComponent,
    MenuComponent,
    AppComponent,
    TabelaInvestimentoComponent,
    GraficosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
