import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunitiesCardDetailsComponent } from './website/components/opportunities/opportunities-card-details/opportunities-card-details.component';
import { PageNotFound404Component } from './website/shared/page-not-found404/page-not-found404.component';
import { LayoutComponent } from './website/layout/layout.component';
import { LandingComponent } from './website/components/landing/landing.component';
import { InvestmentComponent } from './website/investment/investment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  {
    path: '', component: LayoutComponent, children: [
      {
        path: "landing", component: LandingComponent
      },
      {
        path: "invesment", component: InvestmentComponent
      },
      {
        path: "details/:id", component: OpportunitiesCardDetailsComponent
      },
    ]
  },
  {
    path: '**', component: PageNotFound404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
