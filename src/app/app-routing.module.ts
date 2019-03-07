import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenOfferingDetailsComponent } from './token-offering-details/token-offering-details.component';
import { TokenOfferingsComponent } from './token-offerings/token-offerings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth/login', redirectTo: '/login' },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path : 'tokenOfferings',component: TokenOfferingsComponent},
  { path: 'tokenDetails/:id', component: TokenOfferingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
