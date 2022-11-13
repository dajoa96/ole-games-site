import { Injectable, TemplateRef  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader = new  BehaviorSubject<boolean>(false);
}