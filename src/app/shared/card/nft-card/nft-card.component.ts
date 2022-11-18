import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})
export class NftCardComponent implements OnInit {
  @Input('data') data?: any;
  noImage: string = '/assets/images/no-image-available.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
