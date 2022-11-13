import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL: string = environment.api.url;

  constructor(
    private http: HttpClient
  ) { }

  logear(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/logear`, data);
  }

  registrar(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/crear`, data);
  }

  verificar(user: any): Observable<any> {
    return this.http.get(`${this.API_URL}/users/verify`, { headers: { 'x-token': user } });
  }

  sendRecoveryEmail(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/recoveryPassword`, data);
  }

  verify2FA(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/verify2FA`, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/users/resetPassword`, data);
  }
}
