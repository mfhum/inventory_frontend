import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, pipe, of, Subject, TimeoutError } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.authService.isLoggedIn()) {
      const expirationInDays = this.authService.getTokenExpirationInDays();
      if (expirationInDays <= this.authService.TOKEN_NOT_VALID_ANYMORE) {
        // Token not valid anymore, login again
        this.router.navigate(['/login']);
        return of(false);
      } else if (expirationInDays < this.authService.TOKEN_EXPIRES_SOON) {
        // Token is about to expire soon, get a new one
        const subject = new Subject<boolean>();
        this.authService.refreshToken(this.authService.token).subscribe(
          data => {
            // Save the new obtained token
            this.authService.setToken(data['token']);
            subject.next(true);
          },
          error => {
            // Couldn't refresh token
            this.authService.removeToken();
            this.router.navigate(['/login']);
            subject.next(false);
          }
        );
        return subject.asObservable().pipe(first());
      } else {
        // User is logged in
        return of(true);
      }
    } else {
      // User is not logged in
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}
