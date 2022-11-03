import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

stockList: Stock[]|any;

private apiPosStock:string = 'http://localhost:8082/api/v1.0/market/stock/addStock';
private apiGetStock:string ='http://localhost:8082/api/v1.0/market/stock/getAllStocks';

  addStock(cid:number, stock:Stock):Observable<Stock>
  {
    return this.http.post<Stock>(`${this.apiPosStock}/${cid}`, stock);
  }

  getAllStock(cid:number):Observable<Array<Stock>>
  {
    return this.http.get<Array<Stock>>(`${this.apiGetStock}/${cid}`);
  }
}
