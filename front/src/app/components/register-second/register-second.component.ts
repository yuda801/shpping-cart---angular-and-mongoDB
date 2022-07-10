import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StatesService } from 'src/app/services/states.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.css']
})
export class RegisterSecondComponent implements OnInit {

  public users: User[] = []

  constructor(private _userService: UsersService,
    private _router: Router,
    private _states: StatesService) { }

  ngOnInit(): void {
    console.log("enteres register second");
    console.log("this._states.getUserInfo() === []:")
    console.log("getUserInfo" + this._states.getUserInfo())

    // let isFirstRegFilled =
    if (!this._states.getStateRegOne()) {
      console.log("reg state one is: " + this._states.getStateRegOne())
      this._router.navigate(['/register']);
    }

    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        // console.log("data in reg two component:")
        // console.log(data);
      })
  }

  handleRegClick(regForm: any): any {
    let firstNameInput = regForm.firstName
    let lastNameInput = regForm.lastName
    let cityInput = regForm.city
    let streetInput = regForm.street

    if (!firstNameInput) { alert("please enter your first name"); return; }
    if (!lastNameInput) { alert("please enter your last name"); return; }
    if (!cityInput) { alert("please enter your city"); return; }
    if (!streetInput) { alert("please enter your street"); return; }

    //create a new user
    let temp = new User()
    temp.firstName = firstNameInput
    temp.lastName = lastNameInput
    temp.buyerCity = regForm.lastName
    temp.buyerStreet = regForm.lastName
    let serviceUserInfo = this._states.getUserInfo()
    // console.log("arr is: " + serviceUserInfo)
    temp.roll = serviceUserInfo.roll
    temp.userID = serviceUserInfo.userID
    temp.userName = serviceUserInfo.userName
    temp.password = serviceUserInfo.password
    temp._id = serviceUserInfo._id;

    this._userService.addUser(temp)
      .subscribe(msg => console.log(msg + "sec reg sent massage"))

    //create new cart for user
    let tempCart = new Cart()
    tempCart.userID = this._states.getUserInfo()._id

    this._states.setRegStateTrue()
    this._userService.getUsers()
    this._router.navigate(['/home'])
  }
}
