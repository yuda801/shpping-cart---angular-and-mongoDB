import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { productsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: Item = new Item()
  product: Product = new Product()
  counter: number = 1;
  @Input() justForRender: Boolean = false
  cart: Item[] = []
  finalPrice = 0

  constructor(private _router: Router,
    private _cartService: CartService,
    private _productService: productsService,
    private _states: StatesService) { }

  ngOnInit(): void {
    this.cart = this._states.getCart()
    console.log("this.cart: ")
    console.table(this.cart)
    for (let i of this.cart) {
      this._productService.getOneProduct(i._id)
        .subscribe(data => this.product = data);
      this.finalPrice += this.product.price;
      console.log(this.product)
      console.log("final price: " + this.finalPrice);
    }
    // if (!this._states.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }

    //cart = current user cart
    // this._cartService.getOneCart(this._states.getUserInfo()._id)
    //   .subscribe(data => this.cart = data)

    this.cart = this._states.getCart()

    // for (let i = 0; i < this.cart.length; i++){
    //   this.finalPrice +=
    // }
    // console.log("cart right now is:")
    // console.table(this.cart)
    // console.log("is reged is: " + this._states.getRegState())
    this._router.navigate(["/home"])




  }
  handleclick() {

  }

}
