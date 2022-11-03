import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) 
  { }

  companys : Company[] | any;

  private apiGet:string ='http://localhost:8082/api/v1.0/market/company/getAllCompanyDtl';
  private apiPost:string ='http://localhost:8082/api/v1.0/market/company/addCompany';
  private apiDelete:string ='http://localhost:8082/api/v1.0/market/company/deleteCompany';
  private apiUpdate:string ='http://localhost:8082/api/v1.0/market/company/updateCompany';
  private apiGetById:string ='http://localhost:8082/api/v1.0/market/company/getCompanyId';

  addCompany(comObj:Company):Observable<Company>
  {
    return this.http.post<Company>(this.apiPost, comObj);
  }

  getAllCompany():Observable<Array<Company>>
  {
    return this.http.get<Array<Company>>(this.apiGet);
  }

  deleteCompany(cid:number):Observable<Company>
  {
    return this.http.delete<Company>(`${this.apiDelete}/${cid} `);
  }

  getCompanyById(cid:number):Observable<Company>
  {
    return this.http.get<Company>(`${this.apiGetById}/${cid}`);
  }

  updateCompany(comObj:Company):Observable<Company>
  {
    return this.http.put<Company>(this.apiUpdate, comObj);
  }

}
