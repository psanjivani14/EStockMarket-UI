import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService:CompanyService, private http:HttpClient) { }

  ngOnInit(): void {
  }

  comObj:Company = new Company();
  comArr:Array<Company>=[];

  data:{}|any;

  addCompanyDetails()
  {
    this.companyService.addCompany(this.comObj).subscribe(data=>{
      console.log("inside addCompanyDetails component1 "+data)
      this.data = JSON.stringify(data);
      console.log("inside addCompanyDetails component2 "+data)
      this.comArr.push(this.data);
      console.log("inside addCompanyDetails component2 "+this.comArr);
      window.location.reload();
    },
    error=>{
      console.log(error);
    })
  }

  getCompanyList(){
   this.companyService.getAllCompany().subscribe(data=>{
     this.comArr = Object.values(data);
     console.log("sssssss "+this.comObj);
   })
  }

  deleteCompany(cid:number){
    this.companyService.deleteCompany(cid).subscribe(data=>{
      let comIndex = this.comArr.findIndex(c=>c.companyCode==cid);
      this.comArr.splice(comIndex, 1);
      alert("Company is deleted..!!");
      window.location.reload();
      this.getCompanyList();
    },
    error=>{
      console.log(error);
    })
  }

  updateCompany(com:Company)
  {
    this.companyService.updateCompany(com).subscribe(data=>{
      let comIndex = this.comArr.findIndex(c=>c.companyCode=com.companyCode);

    })
  }

  comp:Company = new Company();
  compArr: Array<Company>=[];

  getCompanyById(cid:number)
  {
    this.companyService.getCompanyById(cid).subscribe(data=>{
      this.compArr = Object.values(data);
      this.data = JSON.stringify(data);
      alert("Serch result is given.!");

    })
  }
  
}
