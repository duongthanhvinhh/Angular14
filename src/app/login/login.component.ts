import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  log_email: string;
  log_pw: string;
  login_result = '';
  constructor(private router: Router, public router1: ActivatedRoute) {}

  ngOnInit(): void {}
  login() {
    // when the user enter correct user name and password
    if (this.log_email == 'vinhdtvt1999@gmail.com' && this.log_pw == 'a1234') {
      this.login_result = 'Login Successfully';
      this.router.navigate(['/login/loginsuccess']);
    } else {
      this.login_result = 'Wrong Username or Password';
    }
  }
}
