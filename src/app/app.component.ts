import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidebarIsOpen: boolean = false;
  loader: boolean = false;
  detailIsOpen: boolean = false;
  sidebarSuscriptionOpen$ = this.sidebarService.open.subscribe((isOpen: boolean)=> {
    this.sidebarIsOpen = isOpen;
  });

  constructor(
    private sidebarService: SidebarService,
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {

  }

}

