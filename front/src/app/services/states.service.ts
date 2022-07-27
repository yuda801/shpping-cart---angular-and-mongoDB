import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  private isReged = false;
  private userInfo: User = new User
  private isRegOneFilled = false
  private items: Item[] = []
  private orderFinalPrice: number = 0
  private cartID: string = ''

  //autheticate user when entered first part
  getStateRegOne(): boolean {
    console.log("reg part one filled state is: " + this.isRegOneFilled)
    return this.isRegOneFilled;
  }
  setStateRegOneTrue() {
    console.log("reg part one filled state is set true")
    this.isRegOneFilled = true;
  }

  //autheticate user when entering a component
  getRegState(): boolean {
    console.log("registration state is: " + this.isReged)
    return this.isReged;
  }
  setRegStateFalse() {
    console.log("registration state set false")
    this.isReged = false;
  }
  setRegStateTrue() {
    console.log("registration state set true")
    this.isReged = true;
  }


  //for moving user info between components
  getUserInfo(): User {
    // console.log("User Info: " + this.userInfo)
    return this.userInfo;
  }
  setUserInfo(data: User): void {
    console.log("registration state set false")
    this.userInfo = data;
  }

  //holds the list of the items in the cart
  // --remember to add and remove from local storage so it will be available on next enterance--
  getCart() {
    console.log("returning local list of cart items")
    return this.items;
  }
  addToCart(item: Item) {
    console.log("added to local cart list")
    this.items = [...this.items, item]
  }
  removeFromCart(id: string) {
    this.items = this.items.filter(itm => itm._id !== id);
  }

  getOrderFinalPrice() {
    console.log("returning final price")
    return this.orderFinalPrice;
  }
  setOrderFinalPrice(price: number) {
    console.log("set final price to" + price);
    this.orderFinalPrice = price;
  }

  getCartID() {
    console.log("returning cartID")
    return this.orderFinalPrice;
  }
  setCartID(id: string) {
    console.log("set cartID to" + id);
    this.cartID = id;
  }
}
