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
  // public fruits = ['Apple', 'Orange', 'Banana'];
  public fruitAndPrice = [
    { fruit: 'Apple', price: 50,flashSale:false,moreInfo:"Are in high price!" },
    { fruit: 'Orange', price: 35,flashSale:true,moreInfo:"Are in low price!" },
    { fruit: 'Banana', price: 38,flashSale:true,moreInfo:"Normally"}];

  public districts:  string[]=['District'];

  public cities = [
    {city: 'Select City',district: []},
    {
      city: 'Quang Ngai',
      district: [
        'Mo Duc',
        'Duc Pho',
        'Binh Son',
        'Tu Nghia',
        'Son Tinh',
        'Son Ha',
        'Tra Bong',
        'Thanh Pho Quang Ngai'
      ],
    },
        {
      city: 'Ho Chi Minh',
      district: [
        'Quan 1',
        'Quan 2',
        'Quan 3',
        'Quan 4',
        'Quan 5',
        'Quan 6',
        'Quan 7',
        'Quan 8',
        'Quan 9',
        'Quan 10',
        'Quan 11',
        'Quan 12'
      ],
    },
      {
      city: 'Bac Kan',
      district: [
        'Ba Be',
        'Bach Thong',
        'Cho Don',
        'Cho Moi',
        'Na Ri',
        'Ngan Son',
        'Pac Nam',
        'Thi xa Bac Kan'
      ],
    },
  ];

  constructor() { }

  public ngOnInit(): void { //Console.log('') will print out everything to the console of the website
    console.log('fruit is ', this.fruitAndPrice);
    console.log('City: ' ,this.cities);
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
//#1
    // const search = this.cities.filter(data => data.city === city);
    // console.log('search',search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //#2
    this.districts =
      this.cities.find(data => data.city === city)?.district || []; //Cho data duyet qua mang cities, neu co city nao bang city minh chon thi return array district, if ko co array district thi return empty array

  }
}
