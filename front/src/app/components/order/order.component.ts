import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { StatesService } from 'src/app/services/states.service';

import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: Item = new Item()
  @Input() product: Product = new Product()
  counter: number = 1;
  @Input() justForRender: Boolean = false
  cart: Item[] = []
  finalPrice = 0



  public users: any = []

  constructor(private _userService: UsersService,
    private _router: Router,
    private _states: StatesService) { }

  ngOnInit() {
    console.log("entered order component");

    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        // console.log("data in reg one component:")
        // console.log(data);
      })
  }

  handleOrder(regForm: any): any {
    let cityInput = regForm.city
    let streetInput = regForm.street
    let dateInput = regForm.date
    let creditCardInput = regForm.creditCard

    if (!cityInput) { alert("please choose your role"); return; }
    if (!streetInput) { alert("please enter your ID"); return; }
    if (!dateInput) { alert("please enter your email"); return; }
    if (!creditCardInput) { alert("please enter your password"); return; }

    let cart = this._states.getCart()

    let order = new Order()
    order.userID = this._states.getUserInfo()._id
    // order.cartID = cart.
    order.finalPrice = this._states.getOrderFinalPrice()
    order.city = cityInput
    order.street = streetInput
    order.deliveryDate = dateInput;
    order.fourDigits = creditCardInput;
    // this.
    this._states.setStateRegOneTrue()
    console.log("just set steate of part one to true")
    console.log("going to second part")
    this._router.navigate(['/registersecond']);

  }


  // this.cart = this._states.getCart()
  // console.log("this.cart: ")
  // console.table(this.cart)
  // this.finalPrice = 0;
  // for (let i of this.cart) {
  //   this.finalPrice += (i.price * i.quantity);
  // }
  // if (!this._states.getRegState()) {
  //   this._router.navigate(['/login']);
  //   alert("user is not loged in");
  // }

  //cart = current user cart
  // this._cartService.getOneCart(this._states.getUserInfo()._id)
  //   .subscribe(data => this.cart = data)

  // this.cart = this._states.getCart()

  // for (let i = 0; i < this.cart.length; i++){
  //   this.finalPrice +=
  // }
  // console.log("cart right now is:")
  // console.table(this.cart)
  // console.log("is reged is: " + this._states.getRegState())
  // this._router.navigate(["/home"])




}


