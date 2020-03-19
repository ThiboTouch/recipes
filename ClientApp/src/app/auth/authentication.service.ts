import { Injectable } from "@angular/core";
import { Repository } from "../models/repository";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { map, catchError } from 'rxjs/operators';

type loginResponse = {
  success: boolean,
  userId: string
};

@Injectable({
  providedIn:'root'
})
export class AuthenticationService {

  constructor(private repo: Repository, private router: Router) { }

  authenticated: boolean = false;
  name: string;
  userId: string;
  password: string;
  callbackUrl: string;


  login(): Observable<boolean> {
    this.authenticated = false;
    return this.repo.login(this.name, this.password).pipe(
      map(response => {
        if (response) {
          this.authenticated = true;
          this.password = null;
          this.userId = response.userId;
          this.router.navigateByUrl(this.callbackUrl || "menu");
        }
        return this.authenticated;
      }),
      catchError(e => {
        this.authenticated = false;
        return of(false);
      }));
  }

  logout() {
    this.authenticated = false;
    this.repo.logout();
    this.router.navigateByUrl("login");
  }
}
