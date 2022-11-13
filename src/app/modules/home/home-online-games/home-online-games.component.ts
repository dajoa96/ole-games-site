import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-online-games',
  templateUrl: './home-online-games.component.html',
  styleUrls: ['./home-online-games.component.scss']
})
export class HomeOnlineGamesComponent implements OnInit {
  games: any[] = [
    { image: 'assets/images/home/home-online-games/ole-cats.png' },
    { image: 'assets/images/home/home-online-games/ole-racing.png' },
    { image: 'assets/images/home/home-online-games/ole-games.png' },
    { image: 'assets/images/home/home-online-games/twitter.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
