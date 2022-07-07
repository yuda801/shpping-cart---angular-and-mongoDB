import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
// import { ProductList } from '../components/database/productList';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  private _url: string = "http://localhost:3005/products"
  products:any =[]
  // productList: any = [
  //   {
  //     "productID": 10,
  //     "name": "orange",
  //     "price": 12,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199932/orange_w2zxd5.jpg"
  //   },
  //   {
  //     "productID": 11,
  //     "name": "walnut",
  //     "price": 4.8,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/walnut_wzedxp.jpg"
  //   },
  //   {
  //     "productID": 12,
  //     "name": "tomato",
  //     "price": 1.2,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199936/tomato_ilkzyx.jpg"
  //   },
  //   {
  //     "productID": 13,
  //     "name": "water_malon",
  //     "price": 0.9,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/water_malon_e1zucq.jpg"
  //   },
  //   {
  //     "productID": 14,
  //     "name": "pomegranate",
  //     "price": 2.4,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pomegranate_rcwdjs.jpg"
  //   },
  //   {
  //     "productID": 15,
  //     "name": "pear",
  //     "price": 2.3,
  //     "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pear_es3lsm.jpg"
  //   }
  // ]
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

