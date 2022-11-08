import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService, private http:HttpClient) { }

  ngOnInit(): void {

  }

  userObj:User = new User();
  userArr:Array<User>=[];
  data:{}|any;

  registerUser(){

  }

  loginUser(user:User)
  {
    this.userservice.loginUser(user).subscribe(data=>{
     
    });
  }

  getAllUser(){
    
  }

  addUser(user:User)
  {
    this.userservice.addUser(user).subscribe(data=>{
      this.userArr.push(data);
      console.log("Inside addUser component: userArr is "+this.userArr);
    });
  }
}
