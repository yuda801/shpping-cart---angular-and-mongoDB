import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { StatesService } from 'src/app/services/states.service';
import { CartService } from 'src/app/services/cart.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Cart } from 'src/app/models/cart';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.css']
})
export class RegisterSecondComponent implements OnInit {

  public users: User[] = []
  private cart: Cart = new Cart()

  constructor(private _userService: UsersService,
    private _router: Router,
    private _states: StatesService,
    private _cartService: CartService) { }

  ngOnInit(): void {
    console.log("enteres register second");
    console.log("this._states.getUserInfo() === []:")
    console.log("getUserInfo" + this._states.getUserInfo())

    if (!this._states.getStateRegOne()) {
      console.log("reg state one is: " + this._states.getStateRegOne())
      this._router.navigate(['/register']);
    }

    this._userService.getUsers()
      .subscribe(data => {
        this.users = data
      })
  }

  handleRegClick(regForm: any): any {
    let firstNameInput = regForm.firstName
    let lastNameInput = regForm.lastName
    let cityInput = regForm.city
    let streetInput = regForm.street

    if (!firstNameInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter your first name',
        showConfirmButton: false, timer: 2500
      }); return;
    }
    if (!lastNameInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter your last name',
        showConfirmButton: false, timer: 2500
      }); return;
    }
    if (!cityInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter your city',
        showConfirmButton: false, timer: 2500
      }); return;
    }
    if (!streetInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter your street',
        showConfirmButton: false, timer: 2500
      }); return;
    }

    //create a new user
    let temp = new User()
    temp.firstName = firstNameInput
    temp.lastName = lastNameInput
    temp.buyerCity = regForm.lastName
    temp.buyerStreet = regForm.lastName
    let serviceUserInfo = this._states.getUserInfo()
    temp.roll = serviceUserInfo.roll
    temp.userID = serviceUserInfo.userID
    temp.userName = serviceUserInfo.userName
    temp.password = serviceUserInfo.password
    temp._id = serviceUserInfo._id;

    this._userService.addUser(temp)
      .subscribe(msg => console.log(msg + "sec reg sent massage"))
    //------------------------------------------//

    //create new cart for user
    let tempCart = new Cart()
    tempCart.userID = this._states.getUserInfo()._id
    this._cartService.addCart(tempCart).subscribe(data => this.cart = data)
    this._states.setCartID(this.cart.cartID)
    console.log("new cart was mada with id:" + this._states.getCartID())
    //-----------------------------------//

    this._states.setRegStateTrue()
    this._router.navigate(['/home'])
  }
}
