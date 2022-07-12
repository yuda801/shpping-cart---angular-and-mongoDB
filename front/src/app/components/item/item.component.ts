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
  @Input() product: Product = new Product()
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  amount: Number = 1;
  constructor(private _states: StatesService,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  handleAddBtn() {
    if(this.amount < 1){alert("amount must be 1 or higher");this.amount=1;return; }
    if(this.amount > 100){alert("amount cant be more than 100");this.amount=100;return; }
    let temp = new Item()
    temp.itemID = this.product.productID
    temp.item = this.product.name;
    temp.quantity = this.amount;
    this._states.addToCart(temp);
    // console.log(this._states.getCart())
    this.addNewItem(this.forRender)
    this._router.navigateByUrl('/cart', { skipLocationChange: true })
    .then(() => {this._router.navigate(['/home']);
    });
  }


}
