import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NFTSMock } from '../mocks/nfts.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL: string = environment.api.url;

  constructor(
    private http: HttpClient
  ) { }

  searchTerm(searchTerm: string): any[] | undefined {
    if (searchTerm == undefined || searchTerm == null || searchTerm == '') return;
    const st: string = searchTerm.toString().toLowerCase().trim();
    const dataNotFeatured = NFTSMock.slice().filter((d) => !d.featured);
    let matches: any[] | undefined = [];
    dataNotFeatured.forEach((d) => {
      for(let key in d) {
        if (key !== 'currency') {
          const val = d[key].toString().toLowerCase();
          if (val.includes(st) && !matches?.includes(d)) matches?.push(d);
        }
      }
    });
    return matches;
  }
}
