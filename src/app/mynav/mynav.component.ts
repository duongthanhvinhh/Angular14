import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss'],
})
export class MynavComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public logOut(): void {
    this.auth.logOut();
  }
}
