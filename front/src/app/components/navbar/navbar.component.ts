import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router,
    private _state: StatesService) { }

  ngOnInit(): void {
  }

  handleHomeClick() {
    if (this._state.getRegState() === true){
      this._router.navigate(['/home'])
      console.log("going home!")
    }
    else
      alert("you are not loged in")
  }

  handleCartBtnClick() {
    if (this._state.getRegState() === true)
      this._router.navigate(['/home'])
    else
      alert("you are not loged in")
  }
}
