import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  public likeNumbers = 137;
  constructor() {}

  ngOnInit(): void {}
  public liked(): void {
    this.likeNumbers++;
  }
}
