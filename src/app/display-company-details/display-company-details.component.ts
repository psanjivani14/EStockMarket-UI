import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company/company';

@Component({
  selector: 'app-display-company-details',
  templateUrl: './display-company-details.component.html',
  styleUrls: ['./display-company-details.component.css']
})
export class DisplayCompanyDetailsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    window.location.reload;
  }

}
