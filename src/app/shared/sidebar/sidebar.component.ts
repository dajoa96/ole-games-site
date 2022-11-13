import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
declare let window: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidebarIsOpened$?: Subscription;
  sidebarIsOpened: boolean = true;

  constructor(
    private sidebarService: SidebarService,
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sidebarIsOpened$ = this.sidebarService.open.asObservable().subscribe((s: any) => {
      this.sidebarIsOpened = s;
    });
  }

  ngOnDestroy(): void {
    this.sidebarIsOpened$?.unsubscribe();
  }

  closeSidebar(): void {
    this.sidebarService.open.next(false);
  }

  onNavigate() {
    this.closeSidebar();
  }
}
