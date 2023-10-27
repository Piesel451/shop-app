import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  private apiUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private cookieService: CookieService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isLogged()
  }

  isLogged(){
    const token = this.cookieService.get('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getCurrentUser() {
    const token = this.cookieService.get('access_token');
    const getUser = `${this.apiUrl}/getCurrentUser`;
    return this.http.post(getUser, token);
  }

}