import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  forRender:string = "render!";
  temoproduct:Item = new Item
  @Input() product: Product = new Product()

  amount: number = 1;
  constructor(private _states: StatesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log("current product received on item component is : ")
    console.table(this.product)
   }

  handleAddBtn() {
    if(this.amount < 1){alert("amount must be 1 or higher");this.amount=1;return; }
    if(this.amount > 100){alert("amount cant be more than 100");this.amount=100;return; }
    let temp = new Item()
    temp.itemID = this.product._id;
    temp.item = this.product.name;
    temp.quantity = this.amount;
    temp.price = this.product.price;
    this._states.addToCart(temp);
    // console.log(this._states.getCart())
    // this._router.navigateByUrl('/cart', { skipLocationChange: true })
    // .then(() => {this._router.navigate(['/home']);
  // });
    this._router.navigate(['/cart'])
  }


}
