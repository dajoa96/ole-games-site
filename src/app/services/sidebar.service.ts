import { Injectable, TemplateRef  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  open = new  BehaviorSubject<boolean>(false);
  detailIsOpen = new  BehaviorSubject<boolean>(false);
  marketActivated = new BehaviorSubject<string>('');
  option = new BehaviorSubject<string>('null');
  rarityMarket = new BehaviorSubject<number>(0);
  sortByRarityMarket = new BehaviorSubject<string>('');
  sortByRGOLDMarket = new BehaviorSubject<string>('');
  priceFilter = new BehaviorSubject<object>({});

  rarityToShow(value: any) {
    this.rarityMarket.next(value);
  }

  sortByRarity(value: any) {
    this.sortByRarityMarket.next(value);
  }

  sortByRGOLD(value: any) {
    console.log('llamandose');
    this.sortByRGOLDMarket.next(value);
  }

}