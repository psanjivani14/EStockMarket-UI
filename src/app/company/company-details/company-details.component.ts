import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Company } from '../company';
import { CompanyComponent } from '../company.component';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | any;
  id: number | any;
  constructor(private companyService: CompanyService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.company = this.companyService.getCompanyById(this.id);
      console.log("new id "+this.id+" company "+this.company);
      this.company = JSON.stringify(this.company);
      console.log("new id "+this.id+" company "+this.company);
    });
  }

}
