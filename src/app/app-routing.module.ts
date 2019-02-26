import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenOfferingDetailsComponent } from './token-offering-details/token-offering-details.component';
import { RedirectComponent } from './redirect/redirect.component';
import { TokenOfferingsComponent } from './token-offerings/token-offerings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth/login', component: RedirectComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path : 'tokenOfferings',component: TokenOfferingsComponent},
  { path: 'tokenDetails/:id', component: TokenOfferingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
