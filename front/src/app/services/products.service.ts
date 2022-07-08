import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  private _url: string = "http://localhost:3005/products"
  products:any =[]
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.products = this.http.get<Product[]>(this._url);
    console.log("products list in service:")
    console.log(this.products)
    // this.products = [...this.products, ...this.productList]
    // return this.products + this.productList;
    return this.products;
  }

  /** GET Products by id. Will 404 if id not found */
  delProducts(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this._url}/${id}`)
  }

  /** create a  Products  */
  // addProducts(products: Product): Observable<any> {
  //   console.log('service added producr')
  //   return this.http.post<any>(`${this._url}`, { 'model': Products.model, 'color': Products.color })
  // }
}

