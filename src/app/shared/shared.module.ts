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

@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent,
    FooterComponent,
    SidebarComponent,
    TruncateStringPipe,
    CopyClipboardDirective,
    RegularSwitchComponent,
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
  ],
  providers: [
    ApiService,
  ]
})
export class SharedModule { }
