import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStockMarket-UI';

  constructor(private router:Router){

  }
  addStock1()
  {
    console.log("inside addStock1...")
    this.router.navigate(['getstockList']);
   // this.router.navigateByUrl('getstockList');
  }

  

}

