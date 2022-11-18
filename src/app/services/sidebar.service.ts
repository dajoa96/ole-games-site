import { Injectable, TemplateRef  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  open = new  BehaviorSubject<boolean>(false);
  detailIsOpen = new  BehaviorSubject<boolean>(false);
}
