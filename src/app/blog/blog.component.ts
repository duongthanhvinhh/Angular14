import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public likeNumbers = 999;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  public liked(): void {
    this.likeNumbers++;
  }
}
