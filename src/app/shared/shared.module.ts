import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SwiperModule } from 'swiper/angular';
import { TruncateStringPipe } from '../pipes/truncate-string.pipe';
import { CopyClipboardDirective } from '../directives/copy-clipboard.directive';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ApiService } from '../services/api.service';
import { QRCodeModule } from 'angularx-qrcode';
import { RegularSwitchComponent } from './switch/regular-switch/regular-switch.component';
import { GameCardComponent } from './card/game-card/game-card.component';
import { TournamentCardComponent } from './card/tournament-card/tournament-card.component';
import { PersonelCardComponent } from './card/personel-card/personel-card.component';
import { SearchFilterComponent } from './search/search-filter/search-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent,
    FooterComponent,
    SidebarComponent,
    TruncateStringPipe,
    CopyClipboardDirective,
    RegularSwitchComponent,
    GameCardComponent,
    TournamentCardComponent,
    PersonelCardComponent,
    SearchFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgbModule,
    NgxSliderModule,
    QRCodeModule,
    NgbModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ToastComponent,
    SidebarComponent,
    TruncateStringPipe,
    CopyClipboardDirective,
    RegularSwitchComponent,
    GameCardComponent,
    TournamentCardComponent,
    PersonelCardComponent,
    SearchFilterComponent,
  ],
  providers: [
    ApiService,
  ]
})
export class SharedModule { }
