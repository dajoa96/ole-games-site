import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input('data') data: any;
  noImage: string = '/assets/images/no-image-available.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
