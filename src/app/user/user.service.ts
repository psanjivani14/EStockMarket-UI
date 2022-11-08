import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  users : User[] | any;
//  '
private apiResister:string='http://localhost:8081/auth/user/register-user';
private apiLogin:string='http://localhost:8081/auth/user/register-user/login';
private apiGetAllUser:string ='http://localhost:8081/api/v1/users/getAllUsers';
private apiAddUser:string ='http://localhost:8081/api/v1/users/add-user';

registerUser(user:User):Observable<User>
{
  alert("resgistering user..!");
  return this.http.post<User>(this.apiResister, user);
}

loginUser(user:User):Observable<Map<String, String>>
{
  alert("Trying to login user..!");
  return this.http.post<Map<String, String>>(this.apiLogin, user);
}

getAllUser():Observable<Array<User>>
{
  alert("Fetching all users..!");
  return this.http.get<Array<User>>(this.apiGetAllUser);
}

addUser(user:User):Observable<User>
{
  return this.http.post<User>(this.apiAddUser, user);
}
}
