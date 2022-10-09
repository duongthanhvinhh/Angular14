import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  constructor() { }
  public total2Numbers(n: number, m: number): number{
    return m + n;
  }

  // public getCounter(): number{
  //   return this.counter;
  // }
  // public setCounter(n: number): void{
  //   this.counter = n;
  // }
  public submitData(data: any): void {
    console.log("put data to server. Data = ", data  )
  }
}
