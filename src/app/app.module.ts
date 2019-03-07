import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TokenOfferingsComponent } from './token-offerings/token-offerings.component';
import { TokenOfferingDetailsComponent } from './token-offering-details/token-offering-details.component';
import { AppHttpInterceptorService } from './app-http-interceptor.service';
import { AuthService } from './auth.service';
import { TokenofferingService } from './tokenoffering.service';
import { RefreshTokenService } from './refresh-token.service';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TokenOfferingsComponent,
    TokenOfferingDetailsComponent,
    SignoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule, FormsModule, AuthService, TokenofferingService, RefreshTokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
