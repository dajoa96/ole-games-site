import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCards]);

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 15,
    resizeObserver: true,
    breakpoints: {
      912: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        resizeObserver: true,
      }
    }
  }
  tournaments: any[] = [
    {
      image: '/assets/images/tournaments/tournament-banner-01.png',
      title: 'Titulo del Torneo',
      date: 'Dentro de 4 dias - 15 de noviembre del 2022',
      dateTimestamp: '',
      quotas: 45,
    },
    {
      image: '/assets/images/tournaments/tournament-banner-02.png',
      title: 'Titulo del Torneo ',
      date: 'Dentro de 5 dias - 16 de noviembre del 2022',
      dateTimestamp: '',
      quotas: 50,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
