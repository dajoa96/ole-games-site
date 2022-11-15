import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-card',
  templateUrl: './personel-card.component.html',
  styleUrls: ['./personel-card.component.scss']
})
export class PersonelCardComponent implements OnInit {
  @Input('data') data?: any;
  noImage: string = '/assets/images/no-image-available.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
