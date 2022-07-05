import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsI } from '../interfaces/productsInterface';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  private _url: string = "http://localhost:3005/products"
  products: any = []
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsI[]> {
    // return this.http.get<ProductsI[]>(this._url);
    this.products = this.http.get<ProductsI[]>(this._url);
    console.log("products list in service:")
    console.log(this.products)
    return this.products;
  }
}

