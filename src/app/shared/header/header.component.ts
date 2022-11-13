import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ToastService } from 'src/app/services/toast.service';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ChainsMock } from 'src/app/mocks/chains.mock';

declare let window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidebarIsOpened$?: Subscription;
  sidebarIsOpened: boolean = true;

  constructor(
    private sidebarService: SidebarService,
    private toastService: ToastService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.sidebarIsOpened$ = this.sidebarService.open.asObservable().subscribe((s: any) => {
      this.sidebarIsOpened = s;
    });
  }

  ngOnDestroy(): void {
    this.sidebarIsOpened$?.unsubscribe();
  }

  openSidebarMobile() {
    const opened = this.sidebarService.open.getValue();
    opened ? this.sidebarService.open.next(false) : this.sidebarService.open.next(true);
  }
}



