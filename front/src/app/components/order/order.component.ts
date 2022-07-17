import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { StatesService } from 'src/app/services/states.service';
import { OrderService } from 'src/app/services/order.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  item: Item = new Item()
  counter: number = 1;
  @Input() justForRender: Boolean = false
  cart: Item[] = []
  order: Order = new Order()
  finalPrice = 0
  public users: any = []

  constructor(private _userService: UsersService,
    private _router: Router,
    private _states: StatesService,
    private _orderService: OrderService) { }

  ngOnInit() {
    console.log("entered order component");
    // if (!this._states.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }
    this.cart = this._states.getCart()
    this.finalPrice = 0;
    for (let i of this.cart) {
      this.finalPrice += (i.price * i.quantity);
    }
    this._userService.getUsers()
      .subscribe(data => this.users = data)
  }

  handleOrder(regForm: any): any {
    let cityInput = regForm.city
    let streetInput = regForm.street
    let dateInput = regForm.date
    let creditCardInput = regForm.creditCard

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
    if (!dateInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter your date',
        showConfirmButton: false, timer: 2500
      }); return;
    }
    if (!creditCardInput) {
      Swal.fire({
        position: 'top-end', icon: 'error', title: 'please enter the four last digits of your credit card',
        showConfirmButton: false, timer: 2500
      }); return;
    }
    
    let order = new Order()
    order.userID = this._states.getUserInfo().userID;
    console.table("users state from service is: ")
    console.table(this._states.getUserInfo())
    order.finalPrice = this._states.getOrderFinalPrice()
    order.city = cityInput;
    order.street = streetInput
    order.deliveryDate = dateInput;
    order.fourDigits = creditCardInput;
    this._orderService.addOrder(order).subscribe(data => this.order = data);
    alert("order was placed succefully!");
  }

}
