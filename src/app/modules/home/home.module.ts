import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SafeIframeUrlPipe } from '../../pipes/safe-iframe-url.pipe';
import { Title } from '@angular/platform-browser';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeOnlinePlayersComponent } from './home-online-players/home-online-players.component';
import { HomeOnlineGamesComponent } from './home-online-games/home-online-games.component';
import { HomeBeginComponent } from './home-begin/home-begin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    SafeIframeUrlPipe,
    HomeBannerComponent,
    HomeOnlinePlayersComponent,
    HomeOnlineGamesComponent,
    HomeBeginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ],
  exports: [
    SafeIframeUrlPipe
  ],
  providers: [
    Title
  ]
})
export class HomeModule { }
