import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public logOut(): void {
    console.log('Log Out');
    this.router.navigate(['/login']);
  }
}
