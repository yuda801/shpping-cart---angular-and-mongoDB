import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter:number = 0;
  @Input() justForRender: Boolean = false
  cart: Item[] = []
  allCarts: any = [{}]
  constructor(private _router: Router,
    private _cartService: CartService,
    private _states: StatesService) { }

  ngOnInit(): void {
    // if (!this._states.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }

    //cart = current user cart
    // this._cartService.getOneCart(this._states.getUserInfo()._id)
    //   .subscribe(data => this.allCarts = data)

    this.cart = this._states.getCart()
    console.log("cart right now is: " + this.cart)
    console.log("is reged is: " + this._states.getRegState())
    // this._router.navigate(["/home"])

  }
  handleclick() {

  }

}
