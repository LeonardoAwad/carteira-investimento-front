import { RouterModule, Routes } from "@angular/router";

import { CarteiraComponent } from "./pages/carteira/carteira.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "carteira", component: CarteiraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
