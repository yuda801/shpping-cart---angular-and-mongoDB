import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersI } from '../interfaces/usersInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url: string = "http://localhost:3005/users"
  users: any = []
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersI[]> {
    // return this.http.get<UsersI[]>(this._url);
    this.users = this.http.get<UsersI[]>(this._url);

    console.log("users list in service:")
    console.log(this.users)
    return this.users;
    // [
    //   { "id": 1, "name": "avi", "age": 10 },
    //   { "id": 2, "name": "avi2", "age": 20 },
    //   { "id": 3, "name": "avi3", "age": 30 },
    //   { "id": 4, "name": "avi4", "age": 40 }
    // ]
  }
}
