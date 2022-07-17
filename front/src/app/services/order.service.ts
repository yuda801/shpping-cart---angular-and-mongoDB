import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public _url: string = "http://localhost:3005/orders"

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this._url);
  }

  /** GET Products by id. Will 404 if id not found */
  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this._url}/${id}`)
  }


  getOneOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`${this._url}/${id}`);
  }

  /** create an order  */
  addOrder(order: Order): Observable<Order> {
    // console.log('service added order')
    return this.http.post<Order>(`${this._url}`, {
      'orderID': order.orderID,
      'userID': order.userID,
      'cartID': order.cartID,
      'finalPrice': order.finalPrice,
      'city': order.city,
      'street': order.street,
      'deliveryDate': order.deliveryDate,
      'fourDigits': order.fourDigits
    })
  }
}
