import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService, private http:HttpClient) 
  { }

  ngOnInit(): void {
  }

  public stockObj: Stock = new Stock();
  stockArr: Array<Stock> =[];
  data:{} | any;



  getStock(cid:number){
    this.stockService.getAllStock(cid).subscribe(data=>{
      this.stockArr = Object.values(data);
    },
    error=>{
      console.log(error);
    })
  }

  addStock(cid:number, stock:Stock)
  {
    this.stockService.addStock(cid, stock).subscribe(data=>{
      this.data = JSON.stringify(data);
      this.stockObj = this.data;
      this.stockArr.push(this.data);
      alert("Stock data added to Stock and Company");
    })
  }
}
