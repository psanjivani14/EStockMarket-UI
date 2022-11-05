import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CanMatchFn, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService:CompanyService, private http:HttpClient, private router: Router) { }
  
  ngOnInit(): void {
  }

   public comObj:Company = new Company();
  public comArr:Array<Company>=[];

  data:{}|any;

  onClickViewCompany(){
    this.router.navigate(['/company']);
  }

  addCompanyDetails()
  {
    this.companyService.addCompany(this.comObj).subscribe(data=>{
      console.log("inside addCompanyDetails component1 "+data)
      this.data = JSON.stringify(data);
      console.log("inside addCompanyDetails component2 "+data)
      this.comArr.push(this.data);
      console.log("inside addCompanyDetails component2 "+this.comArr);
      alert("Company data saved successfully..!");
      window.location.reload();
    },
    error=>{
      console.log(error);
    })
  }

  getCompanyList(){
   this.companyService.getAllCompany().subscribe(data=>{
     this.data = JSON.stringify(data);
     console.log("after stringify..."+this.data);
     this.comArr = Object.values(data);
     console.log("sssssss "+this.comObj);
   })
  }

  deleteCompany(cid:number){
    this.companyService.deleteCompany(cid).subscribe(data=>{
      let comIndex = this.comArr.findIndex(c=>c.companyCode==cid);
      this.comArr.splice(comIndex, 1);
      alert("Company is deleted..!!");
     // window.location.reload();
      this.getCompanyList();
    })
  }

  updateCompany(com:Company)
  {
    this.companyService.getCompanyById(com.companyCode).subscribe(data=>{
      console.log("p1:: "+data);
      
    })
  }

  comp:Company = new Company();
  compArr: Array<Company>=[];

  getCompanyById(cid:number)
  {
    this.companyService.getCompanyById(cid).subscribe(data=>{
      this.compArr = Object.values(data);
      this.data = JSON.stringify(data);
      console.log("comp component "+this.data);
      alert("Serch result is given.!");

    })
  }
  
}
