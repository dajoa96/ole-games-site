import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NFTSMock } from 'src/app/mocks/nfts.mock';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  fullList: any[] = NFTSMock.filter(n => n.featured === false);
  searchResults?: any [];
  list: any[] = this.fullList;
  featured: any = NFTSMock.find(n => n.featured === true);

  constructor(
    private titleService: Title,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ole Games - NFT');
  }

  onSearchHandler(e: any) {
    this.searchResults = this.apiService.searchTerm(e);
  }

}
