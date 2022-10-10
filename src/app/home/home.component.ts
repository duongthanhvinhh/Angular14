import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public log_email: string;
  public log_pw: string;
  public login_result = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.log_email == 'student' && this.log_pw == 'Password123') {
      this.login_result = 'Login Successfully';
    } else {
      this.login_result = 'Wrong username or Password';
    }
  }
}
