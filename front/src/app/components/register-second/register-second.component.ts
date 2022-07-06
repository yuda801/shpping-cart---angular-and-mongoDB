import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
// import { UsersI } from 'src/app/interfaces/usersInterface';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.css']
})
export class RegisterSecondComponent implements OnInit {

  public users: User[] = []

  constructor(private _userService: UsersService,
    private _router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("regOneOk") !== "true")
      this._router.navigate(['/register']);

    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        console.log("data in reg two component:")
        console.log(data);
      })
  }

  handleRegClick(regForm: any): any {
    let firstNameInput = regForm.firstName
    let lastNameInput = regForm.lastName
    let cityInput = regForm.city
    let streetInput = regForm.street

    if (!firstNameInput){alert("please enter your first name");return;}
    if (!lastNameInput){alert("please enter your last name");return;}
    if (!cityInput){alert("please enter your city");return;}
    if (!streetInput){alert("please enter your street");return;}

    let temp = new User()
    temp.firstName = firstNameInput
    temp.lastName = lastNameInput
    temp.buyerCity = regForm.lastName
    temp.buyerStreet = regForm.lastName
    this._userService.addUser(temp)
    .subscribe(msg => console.log(msg + "sec reg sent massage"))
    this._userService.getUsers()
  }
}
