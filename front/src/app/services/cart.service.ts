import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _url: string = "http://localhost:3005/carts"
  cart: any = []
  constructor(private http: HttpClient) { }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this._url);
    // console.log("cart list in service:")
    // console.log(this.cart)
    // return this.cart;
  }

  getOneCart(id: string): Observable<Cart> {
    return this.http.get<Cart>(`${this._url}/${id}`);
    // console.log("cart by id in service:")
    // console.log(this.cart)
    // return this.cart;
  }

  /** GET cart by id. Will 404 if id not found */
  delCart(id: string): Observable<Cart> {
    return this.http.delete<Cart>(`${this._url}/${id}`)
  }

  // cartID: Number = 0
  // userID: Number = 0
  // itemsInCart: Object[] = [{}]

  /** create a  cart  */
  addCart(cart: Cart): Observable<Cart> {
    console.log('service added cart')
    return this.http.post<Cart>(`${this._url}`, {
      'cartID': cart.cartID,
      'userID': cart.userID,
      'itemsInCart': cart.itemsInCart
    })
  }
}
