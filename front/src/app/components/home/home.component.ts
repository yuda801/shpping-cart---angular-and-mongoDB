import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { StatesService } from 'src/app/services/states.service';
import { User } from 'src/app/models/user';
// import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forReRender: Boolean = false
  user: User = new User;
  id: String = ''
  amount: Number = 0;
  product: Product = new Product()
  public products: Product[] = []
  // "_id": "gergiom89er"
  // "_id": "gtwiu89i4wrd"
  // "_id": "m5ei!o7okk0"
  // "_id": "fdfvrgsfef"
  // "_id": "greg5445ghjj"
  // "_id": "m5bser54e4"
  private productList = [
    {
      "productID": 10,
      "name": "orange",
      "category": "fruit",
      "price": 1.8,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199932/orange_w2zxd5.jpg",
    },
    {
      "productID": 11,
      "name": "walnut",
      "category": "fruit",
      "price": 4.8,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/walnut_wzedxp.jpg",
    },
    {
      "productID": 12,
      "name": "tomato",
      "category": "fruit",
      "price": 1.2,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199936/tomato_ilkzyx.jpg",
    },
    {
      "productID": 13,
      "name": "water_melon",
      "category": "fruit",
      "price": 0.9,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/water_malon_e1zucq.jpg",
    },
    {
      "productID": 14,
      "name": "pomegranate",
      "category": "fruit",
      "price": 2.4,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pomegranate_rcwdjs.jpg",
    },
    {
      "productID": 15,
      "name": "pear",
      "category": "fruit",
      "price": 2.3,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pear_es3lsm.jpg",
    }
  ]
  constructor(private _router: Router,
    private _productsService: productsService,
    private _states: StatesService) { }

  ngOnInit(): void {
    // for (let prodct of this.productList) {
    //   console.log("product I is: ")
    //   console.log(prodct)
    //   this._productsService.addProduct(prodct)
    //   .subscribe(data => this.product = data)
    // }
    this.forReRender = !this.forReRender

    // console.log("entered home component");
    // console.log("is reged is: " + this._states.getRegState())

    //go to log in page if user is not loged in
    // if (!this._states.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }

    // get list of products
    this._productsService.getProducts()
      .subscribe(data => this.products = data)
    // this.user = this._states.getUserInfo();
    // this.id = this.user._id;
  }

  // handleAddToCartBtn(id: String){
  //   this._states.addToCart(id);
  // }

}

