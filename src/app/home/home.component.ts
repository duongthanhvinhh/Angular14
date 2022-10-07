import { Component, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'VinhTester';
  public age = 24;
  public myColor = 'red';
  // public fruits = ['Apple', 'Orange', 'Banana'];
  public fruitAndPrice = [
    { fruit: 'Apple', price: 50,flashSale:false,moreInfo:"Are in high price!" },
    { fruit: 'Orange', price: 35,flashSale:'sale off 50%',moreInfo:"Are in low price!" },
    { fruit: 'Banana', price: 38,flashSale:'sale off 40%',moreInfo:"Normally"}];

  constructor() { }

  public ngOnInit(): void { //Console.log('') will print out everything to the console of the website
    console.log('fruit is ', this.fruitAndPrice);
    console.log('You are running Angular');
  }
}
