import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: "stockList", component:StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
