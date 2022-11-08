import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CompanyComponent } from './company/company.component';
import { DisplayCompanyDetailsComponent } from './display-company-details/display-company-details.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
    //{path: '' , redirectTo: '/company', pathMatch: 'full'},
    {path: 'company', component:CompanyComponent, children:[
      {path : '', component:CompanyDetailsComponent},
      {path : ':id', component:CompanyDetailsComponent}
    ]},
    {path:"addStock/:companyCode", component:StockComponent},
  //{path: "getCompanyDetails/:companyCode", component:DisplayCompanyDetailsComponent},
  //{path: "" , component:CompanyComponent, children:[
   // {path: ":id", component:CompanyDetailsComponent}
  //]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
