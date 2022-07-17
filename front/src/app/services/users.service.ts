import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url: string = "http://localhost:3005/users"
  users: any= []
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(this._url);
    this.users = this.http.get<User[]>(this._url);

    // console.log("users list in service:")
    // console.log(this.users)
    return this.users;
  }

    /** create a user  */
  addUser(user: User): Observable<any> {
    console.log('user added!')
    return this.http.post<any>(`${this._url}`, {
       'roll': user.roll,
       'userID': user.userID,
       'userName': user.userName,
       'password': user.password,
       'firstName': user.firstName,
       'lastName': user.lastName,
       'ssn': user.ssn,
       'buyerCity': user.buyerCity,
       'buyerStreet': user.buyerStreet
      })
  }
}
