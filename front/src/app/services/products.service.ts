import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  public _url: string = "http://localhost:3005/products"
  // products: Product[] = []
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

  /** GET Products by id. Will 404 if id not found */
  delProducts(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this._url}/${id}`)
  }


  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this._url}/${id}`);
  }

  /** create a  Products  */
  // '_id': product._id,
  addProduct(product: Product): Observable<Product> {
    console.log('service added product')
    return this.http.post<Product>(`${this._url}`, {
      'productID': product.productID,
      'name': product.name,
      'category': product.category,
      'price': product.price,
      'imagePath': product.imagePath
    })
  }
}

