import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsComponent } from './tournaments.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TournamentsComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class TournamentsModule { }
