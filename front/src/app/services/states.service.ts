import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  private isReged = false;
  private userInfo: User = new User()
private isRegOneFilled = false


  //autheticate user when entered first part
  getStateRegOne():boolean {
    console.log("reg part one filled state is: " +this.isRegOneFilled )
    return this.isRegOneFilled;
  }
  setStateRegOneTrue() {
    console.log("reg part one filled state is set true")
    this.isReged = true;
  }

  //autheticate user when entering a component
  getRegState():boolean {
    console.log("registration state is: " + this.isReged)
    return this.isReged;
  }
  setRegStateFalse() {
    console.log("registration state set false")
    this.isReged = false;
  }
  setRegStateTrue() {
    console.log("registration state set true")
    this.isReged = true;
  }


  //for moving user info between components
  getUserInfo(): User {
    console.log("User Info: " + this.userInfo)
    return this.userInfo;
  }
  setUserInfo(data: User): void {
    console.log("registration state set false")
    this.userInfo = data;
  }



  // addTodo(title: string) {
  //   // we assaign a new copy of todos by adding a new todo to it
  //   // with automatically assigned ID ( don't do this at home, use uuid() )
  //   this.todos = [
  //     ...this.todos,
  //     {id: this.todos.length + 1, title, isCompleted: false}
  //   ];
  // }

  // removeTodo() {
  //   // this.todos = this.todos.filter(todo => todo.id !== id);
  //   this.isReged = false;
  // }
}
