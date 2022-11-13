import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { TruncateStringPipe } from './pipes/truncate-string.pipe';
import { ToastService } from './services/toast.service';
import { Web3ModalModule, Web3ModalService } from '@mindsorg/web3modal-angular';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    TruncateStringPipe,
    ToastService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    NgbDropdown,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
