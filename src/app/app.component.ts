import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';
  constructor(private router: Router) {}
  // public goToHome(): void {
  //   this.router.navigate(['/', 'home']);
  // }
  // public goToAbout(): void {
  //   this.router.navigate(['/', 'about']);
  // }
}
