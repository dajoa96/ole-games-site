import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: any[] = [
    {
      icon: '/assets/images/games/ole-cats/ole-cats-icon.jpg',
      image: '/assets/images/games/ole-cats/ole-cats-image.jpeg',
      description: 'Partidas intensas 1 vs 1 Acaba con tu rival para conseguir el premio. Cada gato tiene 7 vidas, el primero que se quede sin ellas, pierde. Usa los power ups para obtener habilidades.',
      link: '#',

    },
    {
      icon: '/assets/images/games/ole-racing/ole-racing-icon.png',
      image: '/assets/images/games/ole-racing/ole-racing-image.png',
      description: 'Modo clásico con múltiples pistas para competir contra otro amigo. Usa los power ups para obtener habilidades aleatorias.',
      link: '#',

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
