import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Auth } from './auth';
import { AppConfigService } from '../config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = null;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public token: string = null;
  public TOKEN_NOT_VALID_ANYMORE: Number = 0;
  public TOKEN_EXPIRES_SOON: Number = 4;

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: AppConfigService
  ) {
    this.endpoint = config.inventoryBackend + 'auth';
    const loadedToken = localStorage.getItem('token');
    if (loadedToken != null) {
      this.token = loadedToken;
    }
  }

  public setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  public login(auth: Auth) {
    return this.http.post(
      this.endpoint + '/obtain-jwt-token/',
      auth,
      this.httpOptions
    );
  }

  public isLoggedIn(): boolean {
    if (
      this.token != null &&
      this.getTokenExpirationInDays() > this.TOKEN_NOT_VALID_ANYMORE
    ) {
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public refreshToken(token: string) {
    return this.http.post(
      this.endpoint + '/refresh-jwt-token/',
      JSON.stringify({ token: token }),
      this.httpOptions
    );
  }

  public removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  public getTokenExpirationInDays(): Number {
    return 1;
  }
}
