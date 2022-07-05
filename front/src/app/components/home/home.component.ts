import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsService } from 'src/app/services/products.service';
import { ProductsI } from 'src/app/interfaces/productsInterface';

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

  constructor(private _router: Router,
    private _productsService: productsService) { }

  ngOnInit(): void {
    if ((localStorage.getItem("isLogedIn")) !== "true") {
      this._router.navigate(['/login']);
      alert("user is not loged in");
    }

    this._productsService.getProducts()
      .subscribe(data => this.products = data)
  }

}

