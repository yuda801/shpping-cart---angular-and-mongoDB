import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  public products: any = []
  public productlist =  [
    {
      "productID": 10,
      "name": "orange",
      "price": 12,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199932/orange_w2zxd5.jpg"
    },
    {
      "productID": 11,
      "name": "walnut",
      "price": 4.8,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/walnut_wzedxp.jpg"
    },
    {
      "productID": 12,
      "name": "tomato",
      "price": 1.2,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199936/tomato_ilkzyx.jpg"
    },
    {
      "productID": 13,
      "name": "water_malon",
      "price": 0.9,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199935/water_malon_e1zucq.jpg"
    },
    {
      "productID": 14,
      "name": "pomegranate",
      "price": 2.4,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pomegranate_rcwdjs.jpg"
    },
    {
      "productID": 15,
      "name": "pear",
      "price": 2.3,
      "imagePath": "https://res.cloudinary.com/yuda801/image/upload/v1657199933/pear_es3lsm.jpg"
    }
  ]
  constructor(private _router: Router,
    private _productsService: productsService,
    private _isReged: StatesService) { }

  ngOnInit(): void {
    console.log("is reged is: " + this._isReged.getRegState())
    // if (!this._isReged.getRegState()) {
    //   this._router.navigate(['/login']);
    //   alert("user is not loged in");
    // }

    this._productsService.getProducts()
      .subscribe(data => this.products = data)
  }

}

