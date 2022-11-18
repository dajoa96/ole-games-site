import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  @Output('onSearch') onSearch: EventEmitter<any> = new EventEmitter;
  searchControl: FormControl = new FormControl('');
  searchFilter?: any;
  searchSub$?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.searchSub$ = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(s => this.onNewSearch(s));
  }

  ngOnDestroy(): void {
    this.searchSub$?.unsubscribe();
  }

  onNewSearch(value: string) {
    this.onSearch.emit(value);
  }

}
