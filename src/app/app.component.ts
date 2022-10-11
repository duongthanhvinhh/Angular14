import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';
  constructor(public router: Router,public router1: ActivatedRoute) {}
  // public goToHome(): void {
  //   this.router.navigate(['/', 'home']);
  // }
  // public goToAbout(): void {
  //   this.router.navigate(['/', 'about']);
  // }
}
