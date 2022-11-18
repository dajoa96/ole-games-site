import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
      isVideo: true,
      videoLink: 'https://www.youtube.com/embed/Bd71DwGl7hs'

    },
    {
      icon: '/assets/images/games/ole-racing/ole-racing-icon.png',
      image: '/assets/images/games/ole-racing/ole-racing-image.png',
      description: 'Modo clásico con múltiples pistas para competir contra otro amigo. Usa los power ups para obtener habilidades aleatorias.',
      link: '#',
      isVideo: false
    }
  ];

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ole Games - Juegos');
  }
}
