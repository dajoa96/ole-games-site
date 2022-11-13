import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private toast: ToastService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const token = localStorage.getItem('token');
      if(!token) throw new Error("Invalid token, please login");
      return true;
    } catch (error) {
      this.toast.showStandardToast({
        type: 'danger',
        header: 'Atention',
        content: 'An error has ocurred: ' + error
      });
      this.router.navigate(['/login'], { queryParams:{ 'redirectURL': state.url }});
      return false;
    }
  }

}
