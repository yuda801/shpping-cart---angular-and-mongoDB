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
  }

  getOneCart(id: string): Observable<Cart> {
    return this.http.get<Cart>(`${this._url}/${id}`);
  }

  /** GET cart by id. Will 404 if id not found */
  delCart(id: string): Observable<Cart> {
    return this.http.delete<Cart>(`${this._url}/${id}`)
  }

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
