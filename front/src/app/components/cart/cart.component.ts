import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() id = ''
  cart: any = [{}]
  constructor(private _router: Router,
    private _cartService: CartService,
    private _states: StatesService) { }
  // keys = Object.keys(this.cart[0])
  // values = Object.values(this.cart[0])
  // id = this.cart[0].["cartID"]

  // id = cart.id[0]
  ngOnInit(): void {
    let user = this._states.getUserInfo()
    let id = user._id;
    this._cartService.getOneCart(id).subscribe(data => this.cart = data)
    let keys = Object.keys(this.cart)
    let values = Object.values(this.cart)
    console.log(this.cart)
    // console.log(keys)
    // console.log(values)
    console.log("is reged is: " + this._states.getRegState())
    // if (!this._states.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }

  }
  handleclick() {
    let keys = Object.keys(this.cart)
    let values = Object.values(this.cart)
    console.log("keys are: " + keys)
    console.log("values are: " + values)
    console.log(this.cart)
  }

}
